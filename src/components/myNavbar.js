import React from "react"
import { Link } from "gatsby"

class MyNavbar extends React.Component {
  render() {
    return (
      <div>
        <div className="navbar navbar-light bg-light navbar-expand-md mb-5">
          <div className="container">
            <Link to="/" className="navbar-brand">
              {this.props.title}
            </Link>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MyNavbar
