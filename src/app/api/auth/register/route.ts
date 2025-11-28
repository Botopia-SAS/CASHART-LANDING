import { NextRequest, NextResponse } from 'next/server';
import { authSchema } from '@/lib/validations/auth';
import { addUserToSheet, getUserByEmail } from '@/lib/api/sheets';
import * as bcrypt from 'bcryptjs';
import emailService from '@/lib/services/email.service';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    console.log('Received registration body:', body);

    // Validate input
    const validatedData = authSchema.parse(body);

    // Check if user already exists
    const existingUser = await getUserByEmail(validatedData.email);
    if (existingUser) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(validatedData.password, 10);

    // Extract step 2 data
    const { website, instagram, priceRange, financingExperience } = body;

    console.log('Step 2 data:', { website, instagram, priceRange, financingExperience });

    // Add user to Google Sheets with all data
    const sheetData = {
      ...validatedData,
      password: hashedPassword,
      website: website || '',
      instagram: instagram || '',
      priceRange: priceRange || '',
      financingExperience: financingExperience || '',
    };

    console.log('Data being sent to sheets:', sheetData);

    await addUserToSheet(sheetData);

    // Send welcome email to gallery
    try {
      await emailService.sendGalleryWelcomeEmail({
        galleryName: validatedData.galleryName || validatedData.fullName,
        fullName: validatedData.fullName,
        email: validatedData.email,
        phoneNumber: validatedData.phone,
      });
    } catch (emailError) {
      console.error('Email sending failed (non-critical):', emailError);
      // Don't fail the request if email fails
    }

    return NextResponse.json(
      { message: 'User registered successfully' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Registration failed' },
      { status: 500 }
    );
  }
}
