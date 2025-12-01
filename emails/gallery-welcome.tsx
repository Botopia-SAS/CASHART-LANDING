import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
  Hr,
  Column,
  Row,
} from "@react-email/components";
import * as React from "react";

interface GalleryWelcomeEmailProps {
  galleryName: string;
  fullName: string;
}

export const GalleryWelcomeEmail = ({
  galleryName = "Your Gallery",
  fullName = "Gallery Owner",
}: GalleryWelcomeEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Welcome to CashArt - Application Received</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Img
              src="https://res.cloudinary.com/dzi2p0pqa/image/upload/v1763663304/daewusmce0jbacjvqxxk.png"
              width="140"
              height="auto"
              alt="CashArt"
              style={logo}
            />
          </Section>

          <Section style={content}>
            <Heading style={h1}>Welcome to CashArt</Heading>

            <Text style={paragraph}>Hi {fullName.split(" ")[0]},</Text>

            <Text style={paragraph}>
              Thank you for registering <strong>{galleryName}</strong> with
              CashArt. You’re now part of our early access group ahead of the
              official launch in Q1 2026.
            </Text>

            <Text style={paragraph}>
              CashArt is building a financing platform designed for galleries
              and collectors—offering fast, insured, non-custodial art-backed
              credit for acquisitions and liquidity.
            </Text>

            <Section style={statsGrid}>
              <Row>
                <Column style={statCard}>
                  <Text style={statTitle}>
                    Offer BNPL
                    <br />
                    to Your Clients
                  </Text>
                  <Text style={statLabel}>
                    Let collectors buy now and pay later, without friction.
                  </Text>
                </Column>
                <Column style={statCard}>
                  <Text style={statTitle}>
                    Get Paid
                    <br />
                    Upfront
                  </Text>
                  <Text style={statLabel}>
                    Your gallery receives payment immediately.
                  </Text>
                </Column>
                <Column style={statCard}>
                  <Text style={statTitle}>
                    Increase
                    <br />
                    Your Sales
                  </Text>
                  <Text style={statLabel}>
                    Grow revenue by offering flexible financing options.
                  </Text>
                </Column>
              </Row>
            </Section>

            <Section style={{ ...highlightBox, textAlign: "left" }}>
              <Heading style={{ ...highlightTitle, textAlign: "left" }}>
                What Happens Next
              </Heading>
              <Text style={{ ...highlightText, textAlign: "left" }}>
                <span style={{ fontWeight: 600 }}>
                  1. Onboarding Invitation
                </span>
                <br />
                You’ll receive an email when your gallery is selected for early
                onboarding.
                <br />
                <br />
                <span style={{ fontWeight: 600 }}>
                  2. Prepare Your Documents
                </span>
                <br />
                Have your EIN, gallery details, and representative ID ready.
                <br />
                <br />
                <span style={{ fontWeight: 600 }}>3. Q1 2026 Launch</span>
                <br />
                We’ll notify you as soon as the platform goes live.
              </Text>
            </Section>

            <Text style={paragraph}>
              If you have any questions, feel free to reach us at{" "}
              <Link href="mailto:hello@cashart.ai" style={inlineLink}>
                hello@cashart.ai
              </Link>
              .
            </Text>

            <Text style={signature}>
              Best regards,
              <br />
              <strong>The&nbsp;CashArt&nbsp;Team</strong>
            </Text>
          </Section>

          <Hr style={hr} />

          <Section style={footer}>
            <Link
              href="https://cashart-landing.vercel.app/en"
              style={footerLink}
            >
              cashart-landing.vercel.app
            </Link>
            <Text style={footerSeparator}>•</Text>
            <Link href="mailto:hello@cashart.ai" style={footerLink}>
              hello@cashart.ai
            </Link>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default GalleryWelcomeEmail;

const main = {
  backgroundColor: "#f8f9fa",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "40px 20px",
  maxWidth: "600px",
};

const header = {
  textAlign: "center" as const,
  marginBottom: "40px",
};

const logo = {
  margin: "0 auto",
  display: "block",
};

const h1 = {
  color: "#0C5F4C",
  fontSize: "24px",
  fontWeight: "600",
  margin: "0 0 30px 0",
  textAlign: "center" as const,
};

const content = {
  backgroundColor: "#ffffff",
  padding: "40px 30px",
  borderRadius: "8px",
};

const paragraph = {
  color: "#374151",
  fontSize: "15px",
  lineHeight: "1.6",
  margin: "0 0 16px 0",
};

const statsGrid = {
  margin: "24px 0",
};

const statCard = {
  backgroundColor: "#f8fafb",
  padding: "16px 12px",
  borderRadius: "6px",
  textAlign: "center" as const,
  margin: "0 4px",
};

const statValue = {
  fontSize: "24px",
  fontWeight: "700",
  color: "#0C5F4C",
  margin: "0 0 4px 0",
};

const statLabel = {
  fontSize: "12px",
  color: "#6b7280",
  margin: "0",
};

const highlightBox = {
  background: "linear-gradient(135deg, #0C5F4C 0%, #10B981 100%)",
  padding: "24px",
  borderRadius: "8px",
  margin: "24px 0",
  textAlign: "center" as const,
};

const highlightTitle = {
  color: "#ffffff",
  fontSize: "18px",
  fontWeight: "600",
  margin: "0 0 8px 0",
};

const highlightText = {
  color: "#ffffff",
  fontSize: "14px",
  margin: "0",
  lineHeight: "1.5",
};

const inlineLink = {
  color: "#0C5F4C",
  textDecoration: "none",
  fontWeight: "500",
};

const signature = {
  color: "#374151",
  fontSize: "15px",
  lineHeight: "1.6",
  marginTop: "24px",
};

const hr = {
  borderColor: "#e5e7eb",
  margin: "30px 0 20px 0",
};

const footer = {
  textAlign: "center" as const,
};

const footerLink = {
  color: "#6b7280",
  textDecoration: "none",
  fontSize: "13px",
};

const footerSeparator = {
  color: "#9ca3af",
  margin: "0 8px",
  fontSize: "13px",
};

// Título de columna más pequeño y estilizado
const statTitle = {
  fontSize: "16px",
  fontWeight: 600,
  color: "#0C5F4C",
  margin: "0 0 6px 0",
  lineHeight: "1.2",
};
