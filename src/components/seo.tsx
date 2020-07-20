import * as React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

interface IProps {
  description?: string
  lang?: string
  image?: { src: string; height: string; width: string }
  title: string
  pathname?: string
}

const SEO: React.FC<IProps> = ({
  description,
  lang,
  image: metaImage,
  title,
  pathname,
}: IProps) => {
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

  const canonical = pathname
    ? `${site.siteMetadata.siteUrl}${pathname}`
    : site.siteMetadata.siteUrl
  const metaDescription: string = description || site.siteMetadata.description
  const image: string =
    metaImage && metaImage.src
      ? `${site.siteMetadata.siteUrl}${metaImage.src}`
      : `${site.siteMetadata.siteUrl}icons/icon-512x512.png`
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
    { property: 'og:title', content: `${title} | ${site.siteMetadata.title}` },
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
      link={canonical ? [{ rel: 'canonical', href: canonical }] : []}
      meta={metaData}
    />
  )
}

SEO.defaultProps = {
  lang: 'en',
  description: '',
  image: { src: '/icons/icon-512x512.png', height: '512', width: '512' },
  pathname: '',
}

export default SEO
