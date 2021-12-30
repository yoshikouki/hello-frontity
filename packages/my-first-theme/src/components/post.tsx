import { connect, styled } from 'frontity'
import React from "react"
import dayjs from "dayjs";

const Post = connect(({ state }) => {
  const data = state.source.get(state.router.link)
  const post = state.source[data.type][data.id]
  const formattedDate = dayjs(post.date).format("YYYY-MM-DD")
  const author = state.source.author[post.author]

  return (
    <div>
      <h2>{post.title.rendered}</h2>
      <PostInfo>
        <p>
          <strong>Posted: </strong>
          {formattedDate}
        </p>
        <p>
          <strong>Author: </strong>
          {author.name}
        </p>
      </PostInfo>
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </div>
  )
})

export default Post

const PostInfo = styled.div`
  background-image: linear-gradient(to right, #f4f4f4, #fff);
  margin-bottom: 1em;
  padding: 0.5em;
  border-left: 4px solid lightseagreen;
  font-size: 0.8em;

  & > p {
    margin: 0;
  }
`
