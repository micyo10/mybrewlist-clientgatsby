import React from "react"
import { Link } from "gatsby"

const Menu = () => (
  <div style={{
    background: '#222',
    marginBottom: `1.45rem`,
    paddingTop: '10px'
  }}
  id="main-menu">

  <ul style={{
    display: 'flex',
    listStyle: 'none',
    justifyContent: 'space-evenly'
  }}>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/breweries">Breweries</Link></li>
    {/* <li><Link to="/services">Services</Link></li>
    <li><Link to="/blog">Blog</Link></li> */}

  </ul>


  </div>
)

export default Menu
