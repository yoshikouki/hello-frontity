import { connect } from "frontity"
import React from "react"

const Post = connect(({ state }) => {
  const data = state.source.get(state.router.link)
  const post = state.source[data.type][data.id]

  return (
    <div>
      <h2>{post.title.rendered}</h2>
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </div>
  )
})

export default Post