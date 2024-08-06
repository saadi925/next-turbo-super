
export interface Blog {    
    title : string
    description : string
    content? : string
    thumbnail : string
    createdAt : string
    rawData? : string
    category : {
        id : string
        categorySlug : string
        categoryName : string
    }
    
    slug : string
}

export interface GetBlogsResponse {
    blogs : Blog[]
    page : number
    totalPages : number
}


type CustomPost = Blog & {
    content : string
  }

type FullBlog = CustomPost & {
    rawData : string
}

