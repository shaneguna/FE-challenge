import { request } from '../index'

export function getBreeds (): Promise<Breeds> {
    return request.get<BreedsResponse>(`/breeds/`).then(res => res.breeds)
}
