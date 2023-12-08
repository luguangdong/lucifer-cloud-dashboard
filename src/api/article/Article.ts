import articleRequest from './ArticleRequest';

export function app(data: any) {
    const headers: any = {

    }
    return articleRequest.get<any>({
        url: '/app',
        data,
        headers
    })
}


export interface appData{
    name:string
}