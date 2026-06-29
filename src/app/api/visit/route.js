const SENDERBOT_BASE_URL =
  process.env.SENDERBOT_BASE_URL ?? "https://senderbot-9qcp.onrender.com";

const isDev = process.env.NODE_ENV === "development";

export async function POST(request) {
  try {
    if (isDev) {
      return Response.json({ success: false, ignored: "development" });
    }

    const country = request.headers.get("x-vercel-ip-country") || "Unknown";
    const city = request.headers.get("x-vercel-ip-city") || "Unknown";
    const ua = request.headers.get("user-agent")?.toLowerCase() || "";

    if (country === "PL") {
      return Response.json({ success: false, ignored: "PL" });
    }

    const isBot =
      /bot|crawler|spider|crawling|lighthouse|pagespeed|headless|puppeteer|playwright|facebookexternalhit|whatsapp|telegrambot|slackbot|discordbot|skypeuripreview|googlebot|bingbot|yandexbot|duckduckbot|baiduspider|gptbot|claudebot|perplexitybot/i.test(
        ua,
      );

    if (isBot) {
      return Response.json({ success: false, ignored: "bot" });
    }

    const body = await request.json().catch(() => ({}));

    await fetch(`${SENDERBOT_BASE_URL}/visit`, {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        country,
        city,
        page: body.page,
      }),
    });

    return Response.json({ success: true });
  } catch {
    return Response.json({ success: false }, { status: 500 });
  }
}
