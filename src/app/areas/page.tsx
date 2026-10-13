import { Metadata } from "next";
import { generateBreadcrumbSchema } from "@/utils/schema";
import AreasClient from "./AreasClient";

export const metadata: Metadata = {
  title: "Safety Nets & Invisible Grills Service Areas Across Bangalore | CSK",
  description:
    "Explore 110+ Bangalore service areas covered by CSK Safety Nets & Invisible Grills. Free doorstep inspection, certified installation, and same-day service across Whitefield, Koramangala, Indiranagar, HSR Layout, Electronic City, Sarjapur Road, and all zones.",
  alternates: {
    canonical: "/areas",
  },
  openGraph: {
    title: "Safety Nets & Invisible Grills Service Areas Across Bangalore | CSK",
    description:
      "Explore 110+ Bangalore service areas covered by CSK Safety Nets & Invisible Grills. Free doorstep inspection across all Bangalore localities.",
    url: "https://csksafetynets.in/areas",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "CSK Safety Nets & Invisible Grills Bangalore Service Areas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Safety Nets & Invisible Grills Service Areas Across Bangalore | CSK",
    description:
      "Explore 110+ Bangalore service areas covered by CSK Safety Nets & Invisible Grills. Free doorstep inspection across all Bangalore localities.",
    images: ["/images/og-image.webp"],
  },
};

export default function AreasPage() {
  const breadcrumbLinks = [
    { name: "Home", item: "/" },
    { name: "Service Areas", item: "/areas" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbLinks)),
        }}
      />
      <AreasClient />
    </>
  );
}
