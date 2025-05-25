import { NextResponse } from 'next/server';

interface TebexWebhook {
  player: {
    name: string;
    email: string;
  };
  package: {
    id: number;
    name: string;
  };
}

let keys: { [email: string]: string } = {};

export async function POST(req: Request) {
  const signature = req.headers.get('x-tebex-signature');
  const expected = process.env.TEBEX_WEBHOOK_SECRET;

  if (signature !== expected) {
    return new NextResponse('Forbidden', { status: 403 });
  }

  const body = (await req.json()) as TebexWebhook;
  const license = 'KEY-' + Math.random().toString(36).slice(2, 10).toUpperCase();

  keys[body.player.email] = license;
  console.log(`✅ License for ${body.player.name}: ${license}`);

  return NextResponse.json({ license });
}