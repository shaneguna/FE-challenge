import {request} from './index'
import {IBreedsResponse} from "@/types/responses/breed-response";

export function getBreeds (): Promise<IBreedsResponse> {
    return request.get<IBreedsResponse>('/breeds').catch(() => null)
}
