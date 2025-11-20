import { NextRequest, NextResponse } from 'next/server';
import emailService from '@/lib/services/email.service';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, email } = body;

    if (!type || !email) {
      return NextResponse.json(
        { error: 'Missing type or email parameter' },
        { status: 400 }
      );
    }

    let success = false;

    if (type === 'collector') {
      // Send collector welcome email
      success = await emailService.sendCollectorWelcomeEmail({
        fullName: 'Test Collector',
        email: email,
        phoneNumber: '+1234567890',
        artType: 'Contemporary Art',
        priceRange: '$10K - $50K',
        usedFinancing: 'Yes',
        painPoint: 'Long approval times',
        wouldUseFinancing: 'Definitely',
        approvalSpeed: 'Critical - Same day',
        joinBeta: 'Yes, keep me informed',
      });
    } else if (type === 'gallery') {
      // Send gallery welcome email
      success = await emailService.sendGalleryWelcomeEmail({
        galleryName: 'Test Gallery Name',
        fullName: 'Test Gallery Owner',
        email: email,
        phoneNumber: '+1234567890',
      });
    } else {
      return NextResponse.json(
        { error: 'Invalid type. Use "collector" or "gallery"' },
        { status: 400 }
      );
    }

    if (success) {
      return NextResponse.json(
        { message: `Test ${type} email sent successfully to ${email}` },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error('Test email error:', error);
    return NextResponse.json(
      { error: 'Test email failed', details: error.message },
      { status: 500 }
    );
  }
}

// GET endpoint for easy browser testing
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const type = searchParams.get('type');
  const email = searchParams.get('email') || 'andreyplazas77@gmail.com';

  if (!type) {
    return NextResponse.json(
      {
        error: 'Missing type parameter',
        usage: 'Use: /api/test-email?type=collector&email=your@email.com or /api/test-email?type=gallery&email=your@email.com'
      },
      { status: 400 }
    );
  }

  try {
    let success = false;

    if (type === 'collector') {
      // Send collector welcome email
      success = await emailService.sendCollectorWelcomeEmail({
        fullName: 'Test Collector',
        email: email,
        phoneNumber: '+1234567890',
        artType: 'Contemporary Art',
        priceRange: '$10K - $50K',
        usedFinancing: 'Yes',
        painPoint: 'Long approval times',
        wouldUseFinancing: 'Definitely',
        approvalSpeed: 'Critical - Same day',
        joinBeta: 'Yes, keep me informed',
      });
    } else if (type === 'gallery') {
      // Send gallery welcome email
      success = await emailService.sendGalleryWelcomeEmail({
        galleryName: 'Test Gallery Name',
        fullName: 'Test Gallery Owner',
        email: email,
        phoneNumber: '+1234567890',
      });
    } else {
      return NextResponse.json(
        { error: 'Invalid type. Use "collector" or "gallery"' },
        { status: 400 }
      );
    }

    if (success) {
      return NextResponse.json(
        {
          message: `Test ${type} email sent successfully!`,
          to: email,
          type: type
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error('Test email error:', error);
    return NextResponse.json(
      { error: 'Test email failed', details: error.message },
      { status: 500 }
    );
  }
}
