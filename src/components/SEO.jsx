import { useEffect } from 'react';
import { siteConfig } from '../data/siteConfig';

function setMeta(name, content, attr = 'name') {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

export default function SEO({ title, description, canonical, keywords, image }) {
  useEffect(() => {
    document.title = siteConfig.name;

    setMeta('description', description);
    setMeta('keywords', keywords);

    setMeta('og:title', title, 'property');
    setMeta('og:description', description, 'property');
    if (canonical) setMeta('og:url', canonical, 'property');
    if (image) setMeta('og:image', image, 'property');

    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    if (image) setMeta('twitter:image', image);

    if (canonical) {
      let link = document.head.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonical);
    }
  }, [title, description, canonical, keywords, image]);

  return null;
}

export const SITE_URL = siteConfig.siteUrl;
