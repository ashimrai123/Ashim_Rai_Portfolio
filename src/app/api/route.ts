import nodemailer from "nodemailer";

export async function POST(request: Request): Promise<Response> {
  try {
    const body = await request.json();
    console.log("Request body:", body); // Debugging line

    // Destructure body without phoneNumber
    const { firstName, lastName, email, message } = body;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Setup email data
    const mailOptions = {
      from: email,
      to: ["ashrai14691@gmail.com"],
      subject: "Contact Form Submission",
      text: `First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\n\nMessage: ${message}`,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response); // Debugging line

    return new Response(
      JSON.stringify({
        success: true,
        message: "Email sent successfully",
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error); // Debugging line
    return new Response(
      JSON.stringify({ success: false, error: "Error sending email" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
