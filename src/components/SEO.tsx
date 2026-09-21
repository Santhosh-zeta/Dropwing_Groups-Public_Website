import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    name?: string;
    type?: string;
    canonical?: string;
    image?: string;
    url?: string;
}

export default function SEO({
    title,
    description,
    name = "Dropwing Groups",
    type = "website",
    canonical,
    image,
    url
}: SEOProps) {
    const resolvedUrl = url || (typeof window !== "undefined" ? window.location.href : undefined);
    const resolvedCanonical = canonical || (typeof window !== "undefined" ? window.location.href : undefined);
    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{title} | {name}</title>
            <meta name='description' content={description} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            {resolvedCanonical && <link rel="canonical" href={resolvedCanonical} />}

            {/* Facebook tags */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:site_name" content={name} />
            {resolvedUrl && <meta property="og:url" content={resolvedUrl} />}
            {image && <meta property="og:image" content={image} />}

            {/* Twitter tags */}
            <meta name="twitter:creator" content={name} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            {image && <meta name="twitter:image" content={image} />}
        </Helmet>
    );
}
