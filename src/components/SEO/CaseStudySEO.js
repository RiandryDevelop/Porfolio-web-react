import Head from "next/head";

const CaseStudySEO = ({ title, description, image, slug }) => {
  const url = `https://tudominio.com/case-studies/${slug}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: title,
    description,
    image,
    author: {
      "@type": "Person",
      name: "Riandry Connor",
    },
    url,
  };

  return (
    <Head>
      {/* Basic SEO */}
      <title>{title} | Caso de estudio – Riandry Connor</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Head>
  );
};

export default CaseStudySEO;
