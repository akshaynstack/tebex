import { NextRequest, NextResponse } from 'next/server';

const demoKeys = ['KEY-1234ABCD', 'KEY-TESTEXAMPLE'];

export async function GET(req: NextRequest) {
  const key = req.nextUrl.searchParams.get('key');
  if (!key) return new NextResponse('No key provided', { status: 400 });

  if (demoKeys.includes(key)) {
    return new NextResponse('valid', { status: 200 });
  } else {
    return new NextResponse('invalid', { status: 403 });
  }
}