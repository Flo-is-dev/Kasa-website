interface IHost {
    name: string, 
    picture: string
}

export interface DataAPI { cover: string,
    description: string,
    equipments:  string[],
    host: IHost,
    id:string, 
    location: string,
    pictures: string[],
    rating: string,
    tags:  string[],
    title: string
}