function Schema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://charlespaquet.dev#me",
        "name": "Charles Pâquet",
        "url": "https://charlespaquet.dev",
        "jobTitle": "Développeur Front-End",
        "description": "Développeur front-end passionné spécialisé en React et Tailwind CSS.",
        "worksFor": { "@type": "Organization", "name": "Freelance" },
        "sameAs": [
          "https://github.com/charlespaquet",
          "https://www.linkedin.com/in/charlespaquet/"
        ],
        "image": "https://charlespaquet.dev/images/profile.jpg"
      },
      {
        "@type": "WebSite",
        "@id": "https://charlespaquet.dev#website",
        "url": "https://charlespaquet.dev",
        "name": "Charles Pâquet | Développeur Front-End",
        "description": "Portfolio de Charles Pâquet, développeur front-end spécialisé en React et Tailwind CSS.",
        "publisher": { "@id": "https://charlespaquet.dev#me" },
        "inLanguage": "fr"
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export default Schema
