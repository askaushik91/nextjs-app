import { NextResponse } from 'next/server';

export async function GET() {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  const userId = process.env.INSTAGRAM_USER_ID;

  // Check if credentials are set (and not placeholder values)
  if (
    !token ||
    !userId ||
    token === 'your_instagram_long_lived_access_token' ||
    userId === 'your_instagram_user_id'
  ) {
    return NextResponse.json(
      { error: 'Instagram API credentials not configured', data: [] },
      { status: 200 }
    );
  }

  try {
    // Fetch user media via Instagram Graph API
    const url = `https://graph.facebook.com/v21.0/${userId}/media?fields=id,media_type,media_url,permalink,caption&access_token=${token}`;
    const response = await fetch(url, {
      next: { revalidate: 3600 }, // Cache results for 1 hour
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Graph API returned ${response.status}: ${errorText}`);
    }

    const json = await response.json();
    return NextResponse.json({ data: json.data || [] });
  } catch (error: any) {
    console.error('Error fetching Instagram feed:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error', data: [] },
      { status: 500 }
    );
  }
}
