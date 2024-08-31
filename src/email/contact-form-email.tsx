import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  message: string;
  senderMail: string;
};

export default function ContactFormEmail({
  message,
  senderMail,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head>
        <Preview>New message from your portfolio site</Preview>
        <Tailwind>
          <Body className="bg-gray-300 text-black">
            <Container>
              <Section className="bg-black my-10 px-10 py-4 rounded-lg">
                <Heading className="leading-tight text-yellow-500">
                  Your received the following message from the contact form
                </Heading>
                <Text className="text-gray-100">{message}</Text>
                <Hr />
                <Text>The sender&apos;s email is : {senderMail}</Text>
              </Section>
            </Container>
          </Body>
        </Tailwind>
      </Head>
    </Html>
  );
}
