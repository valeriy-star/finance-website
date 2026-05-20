// Prefix a public-folder path with the deployment basePath.
// Set via NEXT_PUBLIC_BASE_PATH in the GitHub Actions workflow
// (e.g. "/finance-website" for a project-page deploy). Returns the
// path unchanged when no basePath is configured.
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
 
export function asset(path: string): string {
  if (!path.startsWith('/')) path = `/${path}`;
  return `${BASE}${path}`;
}
