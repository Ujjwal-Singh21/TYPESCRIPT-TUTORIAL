type RandomNumberType = {
  value: number
}

type PositiveNumberType = RandomNumberType & {
  isPositive: boolean
  isNegative?: never
  zero?: never
}

type NegativeNumberType = RandomNumberType & {
  isNegative: boolean
  isPositive?: never
  zero?: never
}

type ZeroType = RandomNumberType & {
  zero: boolean
  isPositive?: never
  isNegative?: never
}

// type RandomNumberProps = {
//   value: number
//   isPositive?: boolean
//   isNegative?: boolean
//   isZero?: boolean
// }

type RandomNumberProps = PositiveNumberType | NegativeNumberType | ZeroType

export const RandomNumber = (props: RandomNumberProps) => {
  const { value, isPositive, isNegative, zero } = props
  return (
    <div>
      {value} <br />
      {isPositive && 'POSITIVE'}
      {isNegative && 'NEGATIVE'}
      {zero && 'ZERO'}
    </div>
  )
}
