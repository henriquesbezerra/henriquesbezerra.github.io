import * as React from 'react'
import { FaGithubAlt } from 'react-icons/fa'
import { AiFillLinkedin } from 'react-icons/ai'

import { useStaticQuery, graphql } from 'gatsby'

import '../assets/global.css';

const Layout = ({ pageTitle, children }) => {

  const data = useStaticQuery(graphql`
    query{
      site{
        siteMetadata{
          title
          github
          linkedin
        }
      }
    }
  `);

  return (
    <div className="container">
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      
      <header className="site-header">
        <div className="site-title">
          {data.site.siteMetadata.title}
        </div>
        <div className="site-icon-links">
          <a href={data.site.siteMetadata.github} target="_blank" rel="noreferrer">
            <FaGithubAlt size={24}/>
          </a>
          <a href={data.site.siteMetadata.linkedin} target="_blank" rel="noreferrer">
            <AiFillLinkedin size={24}/>
          </a>
        </div>
      </header>
     
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout