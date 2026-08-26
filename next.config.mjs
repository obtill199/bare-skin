/**
 * Static export, because this deploys to GitHub Pages — there is no Node
 * server on the other end. Every page here is static markup; booking still
 * happens on GlossGenius.
 *
 * A project page serves the site from a subdirectory
 * (obtill199.github.io/bare-skin), so internal URLs need that prefix.
 * A custom domain (bareskinstudioict.com) serves from the root and must not
 * have one. The deploy workflow reads the real path off the Pages config and
 * passes it in, so attaching the domain needs no change here.
 */
const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

// Next rejects both a trailing slash and a bare "/", which is exactly what
// the Pages URL for a custom domain gives us.
const basePath = rawBasePath.replace(/\/+$/, '');

/** @type {import('next').NextConfig} */
export default {
  output: 'export',
  basePath,
  // Directory-index serving: /faq becomes /faq/index.html, a file Pages can
  // actually find, rather than an extensionless one it cannot.
  trailingSlash: true,
  // The export has no server to optimize images on request.
  images: { unoptimized: true }
};
