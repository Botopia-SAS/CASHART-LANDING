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
} from "@react-email/components";
import * as React from "react";

interface CollectorWelcomeEmailProps {
  fullName: string;
}

export const CollectorWelcomeEmail = ({
  fullName = "Valued Collector",
}: CollectorWelcomeEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Welcome to CashArt - Collector Waitlist</Preview>
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

            <Text style={paragraph}>Dear {fullName.split(" ")[0]},</Text>

            <Text style={paragraph}>
              You're now on our collector waitlist. We'll keep you updated on
              our launch and exclusive early access opportunities.
            </Text>

            <Section style={highlightBox}>
              <Heading style={highlightTitle}>What You'll Get</Heading>
              <Text style={highlightText}>
                Fast approval • Flexible terms • Secure platform • Global access
              </Text>
            </Section>

            <Text style={paragraph}>
              We'll reach out soon with beta access and special financing rates
              for early members.
            </Text>

            <Text style={paragraph}>
              If you have any questions, feel free to reach us at{" "}
              <Link href="mailto:hello@cashart.ai" style={inlineLink}>
                hello@cashart.ai
              </Link>
              .
            </Text>

            <Text style={signature}>Best regards</Text>
          </Section>

          <Hr style={hr} />

          <Section style={footer}>
            <Link href="https://cashart.ai" style={footerLink}>
              cashart.ai
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

export default CollectorWelcomeEmail;

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

const inlineLink = {
  color: "#0C5F4C",
  textDecoration: "none",
  fontWeight: "500",
};
