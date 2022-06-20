type OscarProps = {
  children: React.ReactNode
}

export const Oscar = (props: OscarProps) => {
  return (
    <div>
      <h3> {props.children}  </h3>
    </div>
  )
}
