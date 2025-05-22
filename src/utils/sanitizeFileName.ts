export function sanitizeFileName(title: string): string {
  return title
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9 \-._]/g, '')
    .trim()
    .replace(/ +/g, '_');
}
