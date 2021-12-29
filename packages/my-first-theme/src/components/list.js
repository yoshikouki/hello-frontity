import connect from "@frontity/connect";

const List = connect(({ state }) => {
  const data = state.source.get(state.router.link)

  return (
    <div>
      {data.items.map(item => {
        return (
          <div key={item.id}>
            {item.type} - {item.id} - {item.link}
          </div>
        )
      })}
    </div>
  )
})

export default List;
