import { request } from './index'

export function getBreeds (): Promise<IBreedsResponse> {
    return request.get<IBreedsResponse>('/breeds')
}
