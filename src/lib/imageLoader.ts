const BASE_PATH = "/rashi-portfolio";

export function getAssetPath(src: string): string {
  if (!src || src.startsWith("http://") || src.startsWith("https://") || src.startsWith("//") || src.startsWith("data:")) {
    return src;
  }
  if (src.startsWith(BASE_PATH)) {
    return src;
  }
  const cleanSrc = src.startsWith("/") ? src : `/${src}`;
  return `${BASE_PATH}${cleanSrc}`;
}

export default function imageLoader({ src }: { src: string }) {
  return getAssetPath(src);
}
