import * as React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

interface SEOProps {
  description?: string
  lang?: string
  image?: { src: string; height: string; width: string }
  title: string
}

const SEO: React.FC<SEOProps> = ({
  description,
  lang,
  image: metaImage,
  title,
}: SEOProps) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            siteUrl
          }
        }
      }
    `
  )

  const metaDescription: string = description || site.siteMetadata.description
  const image: string =
    metaImage && metaImage.src
      ? `${site.siteMetadata.siteUrl}${metaImage.src}`
      : `${site.siteMetadata.siteUrl}favicon-32x32.png`
  const metaData: (
    | {
        name: string
        content: any
        property?: undefined
      }
    | {
        property: string
        content: any
        name?: undefined
      }
  )[] = [
    { name: 'description', content: metaDescription },
    { name: 'keywords', content: site.siteMetadata.keywords.join(', ') },
    { property: 'og:title', content: title },
    {
      property: 'og:description',
      content: metaDescription,
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'twitter:creator',
      content: site.siteMetadata.author,
    },
    {
      property: 'twitter:title',
      content: title,
    },
    {
      property: 'twitter:description',
      content: metaDescription,
    },
  ].concat(
    metaImage
      ? [
          {
            property: 'og:image',
            content: image,
          },
          {
            property: 'og:image:width',
            content: metaImage.width,
          },
          {
            property: 'og:image:height',
            content: metaImage.height,
          },
          {
            name: 'twitter:card',
            content: 'summary_large_image',
          },
        ]
      : [
          {
            name: 'twitter:card',
            content: 'summary',
          },
        ]
  )

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={metaData}
    />
  )
}

SEO.defaultProps = {
  lang: 'en',
  description: '',
  image: { src: '/favicon-32x32.png', height: '32', width: '32' },
}

export default SEO
