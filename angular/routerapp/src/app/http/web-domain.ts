export interface WebDomain {
    page: number,
    per_page: number,
    total: number,
    total_pages: number,
    data : Array<UserObj>
}

export interface UserObj {
    id: number,
    first_name: string,
    last_name: string,
    avatar: string
}

export interface User {
    name : string
    job : string
}