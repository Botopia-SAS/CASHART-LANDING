import nodemailer from 'nodemailer';
import { render } from '@react-email/components';
import CollectorWelcomeEmail from '../../../emails/collector-welcome';
import GalleryWelcomeEmail from '../../../emails/gallery-welcome';

interface CollectorSurveyData {
  fullName: string;
  email: string;
  phoneNumber?: string;
  artType?: string;
  priceRange?: string;
  usedFinancing?: string;
  painPoint?: string;
  wouldUseFinancing?: string;
  approvalSpeed?: string;
  joinBeta?: string;
}

interface GalleryRegistrationData {
  galleryName: string;
  fullName: string;
  email: string;
  phoneNumber?: string;
}

export class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'hello@cashart.ai',
        pass: process.env.EMAIL_PASSWORD || ''
      }
    });
  }

  /**
   * Send welcome email to collector after survey submission
   */
  async sendCollectorWelcomeEmail(data: CollectorSurveyData): Promise<boolean> {
    try {
      const emailHtml = await render(
        CollectorWelcomeEmail({ fullName: data.fullName })
      );

      const mailOptions = {
        from: '"CashArt" <hello@cashart.ai>',
        to: data.email,
        subject: 'Welcome to CashArt - Join the Collector Waitlist',
        html: emailHtml,
      };

      await this.transporter.sendMail(mailOptions);
      console.log(`✅ Collector welcome email sent to ${data.email}`);
      return true;
    } catch (error: any) {
      console.error('❌ Error sending collector welcome email:', error);
      return false;
    }
  }

  /**
   * Send welcome email to gallery after registration
   */
  async sendGalleryWelcomeEmail(data: GalleryRegistrationData): Promise<boolean> {
    try {
      const emailHtml = await render(
        GalleryWelcomeEmail({
          galleryName: data.galleryName,
          fullName: data.fullName,
        })
      );

      const mailOptions = {
        from: '"CashArt" <hello@cashart.ai>',
        to: data.email,
        subject: 'Welcome to CashArt - Your Gallery Application Received',
        html: emailHtml,
      };

      await this.transporter.sendMail(mailOptions);
      console.log(`✅ Gallery welcome email sent to ${data.email}`);
      return true;
    } catch (error: any) {
      console.error('❌ Error sending gallery welcome email:', error);
      return false;
    }
  }

  /**
   * Verify email service configuration
   */
  async verifyEmailService(): Promise<boolean> {
    try {
      await this.transporter.verify();
      console.log('✅ Email service verified successfully');
      return true;
    } catch (error: any) {
      console.error('❌ Error verifying email service:', error);
      return false;
    }
  }
}

export default new EmailService();
