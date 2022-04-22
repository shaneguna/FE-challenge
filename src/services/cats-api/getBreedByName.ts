import {limit, request} from './index'

export function getBreedByName(name: string, page = 1): any {
    const params = {limit, page, breed_ids: name}

    return request.get<any>('/images/search', {params}).then((res: any) => {
        if (res === null) {
            throw new Error(`Somethin`)
        }

        let breedDetails = {
            'data': res[0].breeds[0]
        }

        let images = {
            'images': res.map((item: { id: string, url: string }) => {
                return {
                    'id': item.id,
                    'url': item.url,
                }
            })
        }

        return {...images, ...breedDetails}
    }).catch(() => null)
}
