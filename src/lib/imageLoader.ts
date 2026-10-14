export function getAssetPath(src: string): string {
  if (!src || src.startsWith("http://") || src.startsWith("https://") || src.startsWith("//") || src.startsWith("data:")) {
    return src;
  }
  let cleanSrc = src;
  if (cleanSrc.startsWith("/rashi-portfolio/")) {
    cleanSrc = cleanSrc.replace("/rashi-portfolio/", "/");
  } else if (cleanSrc === "/rashi-portfolio") {
    cleanSrc = "/";
  }
  return cleanSrc.startsWith("/") ? cleanSrc : `/${cleanSrc}`;
}

export default function imageLoader({ src }: { src: string }) {
  return getAssetPath(src);
}
