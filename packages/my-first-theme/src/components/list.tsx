import Link from '@frontity/components/link'
import connect from '@frontity/connect'
import { styled } from 'frontity'

const List = connect(({ state }) => {
  const data = state.source.get(state.router.link)

  return (
    <Items>
      {data.items.map(item => {
        const post = state.source[item.type][item.id]
        return (
          <Link key={item.id} link={post.link}>
            {post.title.rendered}
          </Link>
        )
      })}
    </Items>
  )
})

export default List

const Items = styled.div`
  & > a {
    display: block;
    margin: 6px 0;
    font-size: 1.2em;
    color: steelblue;
    text-decoration: none;
  }
`
