"use server";

import { Resend } from "resend";
import { getErrorMessage, validateString } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    console.log("Running on server");

    const name = formData.get("name");
    const senderMail = formData.get("senderMail");
    const phone = formData.get("phone");
    const subject = formData.get("subject");
    const message = formData.get("message");

    if (!validateString(senderMail, 500)) {
        return {
            error: "Invalid sender email",
        };
    }
    if (!validateString(subject, 500)) {
        return {
            error: "Invalid subject",
        };
    }
    if (!validateString(message, 500)) {
        return {
            error: "Invalid message",
        };
    }
    let data
    try {
      data =  await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>",
            to: "brayjuanico@gmail.com",
            reply_to: senderMail as string,
            subject: subject as string,
            react: React.createElement(ContactFormEmail, {
                message: message as string,
                senderMail: senderMail as string
            })
            // react: <ContactFormEmail message={message} senderMail={senderMail}/>
        });
    } catch (error:unknown) {
        return {
            error: getErrorMessage(error)
        };
    }

    return{
        data
    }
};
