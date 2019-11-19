export type InputType = 'text' | 'number' | 'email' | 'password'

export type Source = {
  title?: string
  author?: string
  source: string
  licence?: string
}

export type Dimensions = {
  height: number
  width: number
}

export type MenuCategory = {
  categoryId: number
  imageUrl: string
  children: (MenuCategory | MenuItem)[]
}

export type MenuItem = {
  id: number
  timeToPrepare: number
  imageUrl: string
  contribution: number
  resources: any[] // so far, the concept of resources is not yet finalized
}
