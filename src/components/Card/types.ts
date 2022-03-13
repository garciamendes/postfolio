export interface ITechnologies {
  name: string
}

export interface ICard {
  id?: number
  image: string
  title: string
  technologies: Array<ITechnologies>
}