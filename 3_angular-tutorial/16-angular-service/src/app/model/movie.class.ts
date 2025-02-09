export class Movie {
  id: number
  name: string
  link: string
  athor: string

  constructor( id: number, name: string, link: string, athor: string) {
    this.id = id
    this.name = name
    this.link = link
    this.athor = athor
  }
}
