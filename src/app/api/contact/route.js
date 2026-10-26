import { UPWORK_URL } from "../../../lib/contact";

export async function POST() {
  return Response.json(
    {
      success: false,
      message: "The contact form is no longer available. Please contact me on Upwork.",
      upworkUrl: UPWORK_URL,
    },
    { status: 410 }
  );
}
