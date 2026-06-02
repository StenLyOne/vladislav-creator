const SENDERBOT_BASE_URL =
  process.env.SENDERBOT_BASE_URL ?? "https://senderbot-9qcp.onrender.com";

export async function POST(request) {
  try {
    const formData = await request.json();

    await fetch(`${SENDERBOT_BASE_URL}/wake-up`, {
      method: "GET",
      cache: "no-store",
    }).catch(() => {});

    const response = await fetch(`${SENDERBOT_BASE_URL}/send`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
      cache: "no-store",
    });

    const result = await response.json().catch(() => ({}));

    if (!response.ok) {
      return Response.json(
        {
          success: false,
          message: result.error || "Error of sending",
        },
        { status: response.status }
      );
    }

    return Response.json({
      success: true,
      message: "Message sent!",
    });
  } catch {
    return Response.json(
      {
        success: false,
        message: "Error of server",
      },
      { status: 500 }
    );
  }
}
