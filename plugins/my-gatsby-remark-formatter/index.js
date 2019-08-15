const visit = require("unist-util-visit")
const toString = require("mdast-util-to-string")

module.exports = ({ markdownAST }, pluginOptions) => {
  visit(markdownAST, "blockquote", node => {
    // Grab the innerText of the heading node
    let text = toString(node)

    const html = `
        <blockquote class="blockquote">
          ${text}
        </blockquote>
      `

    node.type = "html"
    node.children = undefined
    node.value = html
  })

  return markdownAST
}
