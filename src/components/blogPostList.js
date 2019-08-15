import React from "react"
import { Link } from "gatsby"

class BlogPostList extends React.Component {
  render() {
    const { posts } = this.props

    return (
      <div>
        <h1 className="mb-3">Blog</h1>
        <div className="mb-4">
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3>
                <Link to={node.fields.slug}>{title}</Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </div>
          )
        })}
        </div>
      </div>
    )
  }
}

export default BlogPostList