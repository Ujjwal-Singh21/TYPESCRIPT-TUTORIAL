type List2Props<T> = {
  items: T[]
  onClick: (item: T) => void
}

export const List2 = <T extends { id: number }>({ items, onClick }: List2Props<T>) => {
  return (
    <div>
      <h2> List of Items as Objects </h2>
      {
        items.map((item, index) => {
          return (
            <div key={item.id} onClick={() => onClick(item)} >
               {JSON.stringify(item)}
            </div>
          )
        })
      }
    </div>
  )
}
