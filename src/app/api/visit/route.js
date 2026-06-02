const SENDERBOT_BASE_URL =
  process.env.SENDERBOT_BASE_URL ?? "https://senderbot-9qcp.onrender.com";

export async function POST() {
  try {
    await fetch(`${SENDERBOT_BASE_URL}/visit`, {
      method: "POST",
      cache: "no-store",
    });

    return Response.json({ success: true });
  } catch {
    return Response.json({ success: false }, { status: 500 });
  }
}
