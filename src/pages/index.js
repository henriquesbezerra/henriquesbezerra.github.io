// Step 1: Import React
import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

// Step 2: Define your component
const IndexPage = ({data}) => {
  return (
    <Layout pageTitle="Home Page">
      {
        data.allMdx.nodes.map((node) => (
          <article key={node.id} className="card-post">
            <h2>              
              <Link to={`/${node.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query{
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        id
        slug
        frontmatter {
          date(formatString: "MM D, YYYY")
          title
        }
      }
  }
  }
`;

// Step 3: Export your component
export default IndexPage