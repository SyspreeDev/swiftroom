import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      fullName,
      phone,
      email,
      selectedProperty,
      selectedProducts,
      projectType,
      country,
    } = body;

    // ✅ Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ✅ Send mail
    await transporter.sendMail({
      from: `"Swiftrooms Website" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL, // where you want to receive
      subject: "🚀 New Lead from Website",

      html: `
        <h2>📩 New Form Submission</h2>

        <h3>👤 Customer Details</h3>
        <p><b>Name:</b> ${fullName || "N/A"}</p>
        <p><b>Phone:</b> ${country || ""} ${phone || "N/A"}</p>
        <p><b>Email:</b> ${email || "Not provided"}</p>

        <hr/>

        <h3>🏗 Project Details</h3>
        <p><b>Project Type:</b> ${projectType || "N/A"}</p>
        <p><b>Property Type:</b> ${selectedProperty || "N/A"}</p>

        <h3>🪟 Selected Products</h3>
        <ul>
          ${
            selectedProducts?.length
              ? selectedProducts.map((p) => `<li>${p}</li>`).join("")
              : "<li>No products selected</li>"
          }
        </ul>

        <hr/>

        <p style="color:gray;font-size:12px;">
          Submitted from Swiftrooms Website
        </p>
      `,
    });

    return Response.json({ success: true });

  } catch (error) {
    console.error("EMAIL ERROR:", error);
    return Response.json({ success: false, error: error.message });
  }
}