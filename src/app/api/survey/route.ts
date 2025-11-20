import { NextRequest, NextResponse } from 'next/server';
import { addSurveyToSheet } from '@/lib/api/sheets';
import emailService from '@/lib/services/email.service';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.fullName || !body.email || !body.phoneNumber) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Add survey to Google Sheets
    await addSurveyToSheet({
      q1: body.q1 || '',
      q2: body.q2 || '',
      q3: body.q3 || '',
      q4: body.q4 || '',
      q5: body.q5 || '',
      q6: body.q6 || '',
      q7: body.q7 || '',
      companyName: body.companyName || '',
      fullName: body.fullName,
      email: body.email,
      phoneNumber: body.phoneNumber,
    });

    // Send welcome email to collector
    try {
      await emailService.sendCollectorWelcomeEmail({
        fullName: body.fullName,
        email: body.email,
        phoneNumber: body.phoneNumber,
        artType: body.q1,
        priceRange: body.q2,
        usedFinancing: body.q3,
        painPoint: body.q4,
        wouldUseFinancing: body.q5,
        approvalSpeed: body.q6,
        joinBeta: body.q7,
      });
    } catch (emailError) {
      console.error('Email sending failed (non-critical):', emailError);
      // Don't fail the request if email fails
    }

    return NextResponse.json(
      { message: 'Survey submitted successfully' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Survey submission error:', error);
    return NextResponse.json(
      { error: 'Survey submission failed' },
      { status: 500 }
    );
  }
}
