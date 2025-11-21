import { NextRequest, NextResponse } from 'next/server';
import { authSchema } from '@/lib/validations/auth';
import { addUserToSheet, getUserByEmail } from '@/lib/api/sheets';
import * as bcrypt from 'bcryptjs';
import emailService from '@/lib/services/email.service';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

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

    // Add user to Google Sheets
    await addUserToSheet({
      ...validatedData,
      password: hashedPassword,
    });

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
