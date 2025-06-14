import { FC } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO: FC<SEOProps> = ({
  title = 'Pathan Mo. Faizan Khan - Portfolio',
  description = 'Portfolio website of Pathan Mo. Faizan Khan, Computer Science Engineering Student and Tech Enthusiast',
  image = '/assets/images/profile.jpg', // Default image path
  url = typeof window !== 'undefined' ? window.location.href : '',
  type = 'website',
}) => {
  // Create JSON-LD structured data
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Pathan Mo. Faizan Khan',
    url: url,
    image: image,
    jobTitle: 'Computer Science Engineering Student',
    description: description,
    sameAs: [
      'https://github.com/pathan-07', // Replace with your actual social links
      'https://linkedin.com/in/pathan-mo-faizan-khan',
      // Add other social profiles
    ],
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };

  return (
    <Helmet prioritizeSeoTags>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
      <meta name="theme-color" content="#1A1A1A" />
      <link rel="canonical" href={url} />
      
      {/* Open Graph Meta Tags for social sharing */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Pathan Mo. Faizan Khan" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;