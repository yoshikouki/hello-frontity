import Link from "@frontity/components/link";
import connect from "@frontity/connect";

const List = connect(({ state }) => {
  const data = state.source.get(state.router.link)

  return (
    <div>
      <ul>
        {data.items.map(item => {
          const post = state.source[item.type][item.id]
          return (
            <li>
              <Link key={item.id} link={post.link} >
                {post.title.rendered}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
})

export default List;
