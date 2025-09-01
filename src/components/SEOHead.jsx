import { Helmet } from 'react-helmet-async';

const SEOHead = ({ 
  title = "The Moorings Cottage - Holiday Cottage in Y Felinheli, North Wales | Self Catering Anglesey",
  description = "Beautiful self-catering holiday cottage in Y Felinheli, North Wales. Stunning Menai Straits views, near Anglesey & Snowdonia. Perfect cottage for North Wales holidays. Book now!",
  keywords = "cottage in anglesey, cottage in y felinheli, places to stay in north wales, north wales holiday cottage, self catering cottage, holiday cottage wales, menai straits cottage, snowdonia cottage, anglesey accommodation, north wales accommodation, y felinheli accommodation, self catering north wales, holiday rental wales",
  image = "https://themooringscottage.co.uk/img/hero-banner_.jpg",
  url = "https://themooringscottage.co.uk/",
  type = "website",
  structuredData = null
}) => {
  return (
    <Helmet>
      {/* Primary SEO Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="The Moorings Cottage" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="The Moorings Cottage" />
      <meta property="og:locale" content="en_GB" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Additional SEO */}
      <meta name="geo.region" content="GB-GWN" />
      <meta name="geo.placename" content="Y Felinheli, Gwynedd, Wales" />
      <meta name="geo.position" content="53.2167;-4.2167" />
      <meta name="ICBM" content="53.2167, -4.2167" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
