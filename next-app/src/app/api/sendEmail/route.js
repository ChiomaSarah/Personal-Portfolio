import { emailService } from "@/app/api/sendEmail/emailService";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    const subject = `New message from ${name}`;
    const text = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
      </head>
      <body style="margin: 0; padding: 0; background-color: #0f0f1a; font-family: 'Segoe UI', Arial, sans-serif;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #0f0f1a; padding: 40px 0;">
          <tr>
            <td align="center">
              <table width="100%" max-width="600" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; width: 100%; background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); border-radius: 24px; overflow: hidden; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5); border: 1px solid rgba(6, 182, 212, 0.2);">
                
                <!-- Header -->
                <tr>
                  <td style="padding: 40px 30px 20px 30px; text-align: center;">
                    <h1 style="margin: 0; font-size: 28px; font-weight: bold; background: linear-gradient(135deg, #06b6d4, #a855f7, #ec4899); -webkit-background-clip: text; background-clip: text; color: transparent;">
                      New Contact Form Submission
                    </h1>
                    <p style="color: #94a3b8; margin: 10px 0 0 0; font-size: 14px;">Someone left you a message</p>
                  </td>
                </tr>

                <!-- Horizontal Divider -->
                <tr>
                  <td style="padding: 0 30px;">
                    <div style="height: 2px; background: linear-gradient(90deg, #06b6d4, #a855f7, #ec4899); border-radius: 2px;"></div>
                  </td>
                </tr>

                <!-- Email Body -->
                <tr>
                  <td style="padding: 30px;">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <!-- Name -->
                      <tr>
                        <td style="padding-bottom: 20px;">
                          <div style="background: rgba(6, 182, 212, 0.1); border-radius: 12px; padding: 16px; border-left: 4px solid #06b6d4;">
                            <p style="margin: 0 0 4px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #06b6d4; font-weight: 600;">Name</p>
                            <p style="margin: 0; font-size: 18px; color: #e2e8f0; font-weight: 500;">${name}</p>
                          </div>
                        </td>
                      </tr>

                      <!-- Email -->
                      <tr>
                        <td style="padding-bottom: 20px;">
                          <div style="background: rgba(168, 85, 247, 0.1); border-radius: 12px; padding: 16px; border-left: 4px solid #a855f7;">
                            <p style="margin: 0 0 4px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #a855f7; font-weight: 600;">Email</p>
                            <p style="margin: 0; font-size: 18px; color: #e2e8f0; font-weight: 500;">
                              <a href="mailto:${email}" style="color: #a855f7; text-decoration: none;">${email}</a>
                            </p>
                          </div>
                        </td>
                      </tr>

                      <!-- Message -->
                      <tr>
                        <td style="padding-bottom: 20px;">
                          <div style="background: rgba(236, 72, 153, 0.05); border-radius: 12px; padding: 16px; border-left: 4px solid #ec4899;">
                            <p style="margin: 0 0 8px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #ec4899; font-weight: 600;">Message</p>
                            <p style="margin: 0; font-size: 15px; color: #cbd5e1; line-height: 1.6;">${message.replace(/\n/g, '<br/>')}</p>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Buttons -->
                <tr>
                  <td style="padding: 0 30px 30px 30px; text-align: center;">
                    <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(135deg, #06b6d4, #a855f7); color: white; text-decoration: none; padding: 12px 30px; border-radius: 50px; font-weight: 600; font-size: 14px;">Reply to ${name.split(' ')[0]}</a>
                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="background: rgba(0,0,0,0.3); padding: 20px 30px; text-align: center;">
                    <p style="margin: 0; font-size: 12px; color: #64748b;">
                      This email was sent from the contact form of your Portfolio Website.<br/>
                      © ${new Date().getFullYear()} Sarah Osuji
                    </p>
                  </td>
                </tr>
              </table>
            </table>
          </tr>
        </table>
      </body>
      </html>
    `;
    const replyTo = email;

    await emailService(process.env.EMAIL, subject, text, html, replyTo);
    console.log(`Sending email from ${email}...`);

    return new Response(
      JSON.stringify({ message: "Email sent successfully!" }),
      { status: 200 }
    );
  } catch (err) {
    console.error("Email error:", err);
    return new Response(JSON.stringify({ message: "Failed to send email." }), {
      status: 500,
    });
  }
}