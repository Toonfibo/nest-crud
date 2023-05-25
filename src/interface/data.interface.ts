export class data{
    id: number
    name: string
    username: string
    email:string
    phone: string
    website:string
    address : Address
    company: Company
    posts:Post[]
}

export class Post{
    userId: number
    id:number
    title:string
    body: string
}
export class Address{
     street:string
     suite:string
     city:string
     zipcode:string
     geo:Geo
}
export class Company{
      name: string
      catchPhrase: string
      bs: string
}
export class Geo{
    lat: string
    lng: string
}

