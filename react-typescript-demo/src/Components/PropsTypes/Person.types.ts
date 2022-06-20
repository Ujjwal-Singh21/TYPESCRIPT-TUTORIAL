// export type PersonProps = {
//   name: {
//     firstName: string
//     lastName: string
//   }
// }

// Taking name property separately out of Person props and exporting it too:
export type Name = {
  firstName: string
  lastName: string
}

export type PersonProps = {
  name: Name
}