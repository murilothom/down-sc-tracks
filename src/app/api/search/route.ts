import { NextRequest, NextResponse } from 'next/server';
import scdl from 'soundcloud-downloader';
import axios from 'axios';

const SOUND_CLOUD_URL_REGEX = /^https?:\/\/(www\.)?soundcloud\.com\/.+$/i;

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q')?.trim() || '';

  if (!SOUND_CLOUD_URL_REGEX.test(q)) {
    return NextResponse.json({ error: 'URL inválida do SoundCloud' }, { status: 400 });
  }

  try {
    const clientID = await scdl.getClientID();
    let info;

    try {
      info = await scdl.getInfo(q);
    } catch (err) {
      const resolveUrl = 'https://api-v2.soundcloud.com/resolve';
      const res = await axios.get(resolveUrl, {
        params: { url: q, client_id: clientID },
      });
      info = res.data;
      if (info.kind !== 'track') {
        return NextResponse.json({ error: 'URL inválida do SoundCloud' }, { status: 404 });
      }
    }

    return NextResponse.json([info]);
  } catch (err: any) {
    console.error('search route error', err);
    return NextResponse.json(
      { error: 'Não foi possível buscar a faixa. Verifique a URL.' },
      { status: 404 },
    );
  }
}
