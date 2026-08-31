import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Bare Skin Studio',
    short_name: 'Bare Skin',
    description: 'Private Brazilian and full-body waxing in Wichita, Kansas.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fbf7f2',
    theme_color: '#4b373b',
    icons: [{ src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' }],
  };
}
