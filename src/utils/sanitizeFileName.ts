export function sanitizeFileName(title: string): string {
  return title
    .normalize('NFKD')
    .replace(/[ -]/g, '')
    .replace(/[^a-zA-Z0-9 \-._]/g, '')
    .trim();
}
