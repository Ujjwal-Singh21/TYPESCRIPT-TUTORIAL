type ListProps = {
  items: string[] | number []
  onClick: (item: string | number) => void
}

export const List = ({items, onClick}: ListProps) => {
  return (
    <div>
      <h2> List of items </h2>
      {
        items.map((item, index) => {
          return (
            <h4 key={index} onClick={() => onClick(item)}> {item} </h4>
          )
        })
      }
    </div>
  )
}
