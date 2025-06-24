import { NextRequest, NextResponse } from 'next/server';
import scdl from 'soundcloud-downloader';
import { sanitizeFileName } from '@/utils/sanitizeFileName';

export async function GET(request: NextRequest) {
  const url = new URL(request.url).searchParams.get('url');
  if (!url) {
    return NextResponse.json({ error: 'Missing "url" param' }, { status: 400 });
  }
  try {
    const clientID = await scdl.getClientID();
    const info = await scdl.getInfo(url);
    const prog = info.media?.transcodings.find((t) => t.format.protocol === 'progressive');
    if (!prog) throw new Error('Progressive not found');

    const meta = (await fetch(`${prog.url}?client_id=${clientID}`).then((r) => r.json())) as {
      url: string;
    };
    const arrayBuffer = await fetch(meta.url).then((r) => r.arrayBuffer());
    const buffer = Buffer.from(arrayBuffer);

    const fileName = sanitizeFileName(info.title || `track_${info.id}`) + '.mp3';
    return new NextResponse(buffer, {
      status: 200,
      headers: {
        'Content-Type': 'audio/mpeg',
        'Content-Disposition': `attachment; filename="${fileName}"`,
        'Content-Length': buffer.byteLength.toString(),
      },
    });
  } catch (e: any) {
    console.error(e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
