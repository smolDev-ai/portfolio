import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const Nav = ({ siteTitle }) => {
  return (
    <nav>
      <ul class="nav">
        <li class="logo">
          <Link to="/">{siteTitle}</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
