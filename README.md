# learning-nextjs

# route group

app
├── (blog) # Route group (not part of the URL)
│ ├── blog
│ │ ├── [blogId] # Dynamic route
│ │ │ ├── page.tsx

# metadata

# Next.js Metadata Implementation

This project demonstrates how to implement metadata in **Next.js** to improve **SEO, social media sharing, and browser behavior**.

## 🚀 Features

- **Global metadata** (defined in `layout.tsx`)
- **Page-specific metadata** (overriding global metadata)
- **Dynamic metadata** (fetched from an API)
- **Open Graph & Twitter metadata** (for better social sharing)
- **Structured data (JSON-LD)** (for SEO improvements)

---

### Global Metadata (App Router)

```sh
import { Metadata } from "next";
export const metadata = {
  title: "My Next.js App",
  description: "This is a Next.js app with metadata.",
  keywords: ["next.js", "SEO", "metadata"],
  authors: [{ name: "John Doe", url: "https://example.com" }],
  openGraph: {
    title: "My Next.js App",
    description: "This is a Next.js app with metadata.",
    url: "https://example.com",
    siteName: "My Next.js App",
    images: [
      {
        url: "https://example.com/image.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Next.js App",
    description: "This is a Next.js app with metadata.",
    images: ["https://example.com/image.jpg"],
  },
};
```

### Page-Specific Metadata

```sh
export const metadata = {
title: "Home Page - My App",
description: "This is the home page of my Next.js app.",
};
```

### Dynamic Metadata (Fetched from API)

```sh
import { Metadata } from "next";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = await fetch(`https://api.example.com/products/${params.id}`).then(res => res.json());

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.image],
    },
  };
}

export default function ProductPage({ params }: Props) {
  return <h1>Product {params.id}</h1>;
}

```

### Adding Structured Data (JSON-LD)

For better search engine optimization, add structured data in Next.js:

```sh
import Head from "next/head";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "My Next.js App",
    "url": "https://example.com",
  };

  return (
    <Head>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Head>
  );
}

```
