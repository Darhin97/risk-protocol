import { NextResponse, NextRequest } from "next/server";
import { useSearchParams } from "next/navigation";

const ODERBOOK_URL = "https://api.0x.org/orderbook/v1";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  try {
    const quoteToken: string | null = url.searchParams.get("quoteToken");
    const baseToken: string | null = url.searchParams.get("baseToken");

    const orderbook_url = `${ODERBOOK_URL}?quoteToken=${quoteToken}&baseToken=${baseToken}`;

    const response = await fetch(orderbook_url);
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);

    return NextResponse.error();
  }
}
