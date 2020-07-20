import * as React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

type SEOProps = {
  description?: string
  lang?: string
  meta?: []
}

const SEO: React.FC<SEOProps> = ({ description, lang, meta }: SEOProps) => {
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

  const metaDescription: String = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{ lang }}
      meta={[
        { name: 'description', content: metaDescription },
        { name: 'keywords', content: site.siteMetadata.keywords.join(', ') },
      ]}
    />
  )
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  description: '',
}

export default SEO
