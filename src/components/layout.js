import React from "react"
import MyNavbar from "./myNavbar"
import "../styles/bootstrap.css"
import "../styles/style.css"

class Layout extends React.Component {
  render() {
    const { title, children } = this.props

    return (
      <div>
        <header>
          <MyNavbar title={title} />
        </header>
        <main>
          <div className="container">
            <div className="row justify-content-center">{children}</div>
          </div>
        </main>
        <footer style={{ textAlign: "center" }} className="mb-4">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
