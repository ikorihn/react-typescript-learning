type FeeClassification = {
  name: string
  description: string
  unitPrice: number
  numOfPeople: number
  totalPrice: number
}

export type DetailProps = {
  classification: FeeClassification
}
