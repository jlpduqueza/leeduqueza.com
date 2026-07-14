function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}

export default {
  async fetch(request) {
    try {
      if (request.method === "GET") {
        return jsonResponse({
          success: true,
          message: "Contact API is working.",
        });
      }

      if (request.method !== "POST") {
        return jsonResponse(
          {
            success: false,
            error: "Method not allowed.",
          },
          405,
        );
      }

      const body = await request.json();

      const name = body.name?.trim();
      const email = body.email?.trim();
      const subject = body.subject?.trim();
      const message = body.message?.trim();

      // Honeypot spam field
      if (body.company) {
        return jsonResponse({
          success: true,
          message: "Your message has been sent.",
        });
      }

      if (!name || !email || !subject || !message) {
        return jsonResponse(
          {
            success: false,
            error: "Please complete all required fields.",
          },
          400,
        );
      }

      if (!process.env.RESEND_API_KEY) {
        return jsonResponse(
          {
            success: false,
            error: "RESEND_API_KEY is not configured.",
          },
          500,
        );
      }

      if (!process.env.CONTACT_TO_EMAIL) {
        return jsonResponse(
          {
            success: false,
            error: "CONTACT_TO_EMAIL is not configured.",
          },
          500,
        );
      }

      const resendResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from:
            process.env.CONTACT_FROM_EMAIL ||
            "Lee Duqueza Portfolio <onboarding@resend.dev>",
          to: [process.env.CONTACT_TO_EMAIL],
          reply_to: email,
          subject: `Portfolio inquiry: ${subject}`,
          text: [
            `Name: ${name}`,
            `Email: ${email}`,
            `Subject: ${subject}`,
            "",
            message,
          ].join("\n"),
        }),
      });

      const resendText = await resendResponse.text();

      let resendResult = null;

      if (resendText) {
        try {
          resendResult = JSON.parse(resendText);
        } catch {
          resendResult = null;
        }
      }

      if (!resendResponse.ok) {
        console.error("Resend error:", resendText);

        return jsonResponse(
          {
            success: false,
            error:
              resendResult?.message ||
              "The email service rejected the request.",
          },
          resendResponse.status || 500,
        );
      }

      return jsonResponse({
        success: true,
        message: "Thank you! Your message has been sent.",
      });
    } catch (error) {
      console.error("Contact API error:", error);

      return jsonResponse(
        {
          success: false,
          error:
            error instanceof Error
              ? error.message
              : "The message could not be sent.",
        },
        500,
      );
    }
  },
};
