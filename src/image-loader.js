export default function imageLoader({ src, width, quality }) {
  const baseUrl = process.env.NODE_ENV === 'production' 
    ? '/projectcleanmotion' 
    : '';
  
  // If the src already starts with http or https, return it as is
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src;
  }
  
  // Make sure src starts with a slash
  const normalizedSrc = src.startsWith('/') ? src : `/${src}`;
  
  return `${baseUrl}${normalizedSrc}`;
}