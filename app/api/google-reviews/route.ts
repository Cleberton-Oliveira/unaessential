import { NextResponse } from "next/server";

type GoogleReview = {
  reviewId?: string;
  reviewer?: {
    displayName?: string;
    isAnonymous?: boolean;
  };
  starRating?: "ONE" | "TWO" | "THREE" | "FOUR" | "FIVE";
  comment?: string;
  createTime?: string;
  updateTime?: string;
};

type GoogleReviewsResponse = {
  reviews?: GoogleReview[];
  averageRating?: number;
  totalReviewCount?: number;
  nextPageToken?: string;
};

const ratingValues = {
  ONE: 1,
  TWO: 2,
  THREE: 3,
  FOUR: 4,
  FIVE: 5,
} as const;

async function getAccessToken() {
  if (process.env.GOOGLE_BUSINESS_ACCESS_TOKEN) {
    return process.env.GOOGLE_BUSINESS_ACCESS_TOKEN;
  }

  const clientId = process.env.GOOGLE_BUSINESS_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_BUSINESS_CLIENT_SECRET;
  const refreshToken = process.env.GOOGLE_BUSINESS_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) return null;

  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      refresh_token: refreshToken,
      grant_type: "refresh_token",
    }),
    cache: "no-store",
  });

  if (!response.ok) throw new Error("Não foi possível renovar a autorização do Google Business Profile.");
  const payload = (await response.json()) as { access_token?: string };
  if (!payload.access_token) throw new Error("O Google não retornou um token de acesso.");
  return payload.access_token;
}

export async function GET() {
  const accountId = process.env.GOOGLE_BUSINESS_ACCOUNT_ID;
  const locationId = process.env.GOOGLE_BUSINESS_LOCATION_ID;

  if (!accountId || !locationId) {
    return NextResponse.json(
      { configured: false, reviews: [] },
      { status: 503, headers: { "Cache-Control": "no-store" } },
    );
  }

  try {
    const accessToken = await getAccessToken();
    if (!accessToken) {
      return NextResponse.json(
        { configured: false, reviews: [] },
        { status: 503, headers: { "Cache-Control": "no-store" } },
      );
    }

    const reviews: GoogleReview[] = [];
    let averageRating = 0;
    let totalReviewCount = 0;
    let pageToken: string | undefined;
    let page = 0;

    do {
      const url = new URL(
        `https://mybusiness.googleapis.com/v4/accounts/${encodeURIComponent(accountId)}/locations/${encodeURIComponent(locationId)}/reviews`,
      );
      url.searchParams.set("pageSize", "50");
      url.searchParams.set("orderBy", "updateTime desc");
      if (pageToken) url.searchParams.set("pageToken", pageToken);

      const response = await fetch(url, {
        headers: { Authorization: `Bearer ${accessToken}` },
        cache: "no-store",
      });

      if (!response.ok) throw new Error(`A API do Google respondeu com status ${response.status}.`);

      const payload = (await response.json()) as GoogleReviewsResponse;
      reviews.push(...(payload.reviews ?? []));
      averageRating = payload.averageRating ?? averageRating;
      totalReviewCount = payload.totalReviewCount ?? totalReviewCount;
      pageToken = payload.nextPageToken;
      page += 1;
    } while (pageToken && page < 20);

    const normalizedReviews = reviews
      .filter((review) => review.comment?.trim())
      .map((review, index) => ({
        id: review.reviewId ?? `google-review-${index}`,
        name: review.reviewer?.isAnonymous ? "Cliente Google" : review.reviewer?.displayName || "Cliente Google",
        rating: review.starRating ? ratingValues[review.starRating] : 5,
        text: review.comment?.trim() ?? "",
        publishedAt: review.updateTime ?? review.createTime,
        source: "google" as const,
      }));

    return NextResponse.json(
      {
        configured: true,
        reviews: normalizedReviews,
        averageRating,
        totalReviewCount,
      },
      {
        headers: {
          "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
        },
      },
    );
  } catch (error) {
    console.error("Falha ao carregar avaliações do Google Business Profile:", error);
    return NextResponse.json(
      { configured: true, reviews: [], unavailable: true },
      { status: 502, headers: { "Cache-Control": "no-store" } },
    );
  }
}
