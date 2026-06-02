const SENDERBOT_BASE_URL =
  process.env.SENDERBOT_BASE_URL ?? "https://senderbot-9qcp.onrender.com";
const isDev = process.env.NODE_ENV === "development";

export async function POST() {
  try {
    if (isDev) return;
    await fetch(`${SENDERBOT_BASE_URL}/visit`, {
      method: "POST",
      cache: "no-store",
    });

    return Response.json({ success: true });
  } catch {
    return Response.json({ success: false }, { status: 500 });
  }
}
