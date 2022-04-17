import { CONFIG } from '../../config'
import FetchRequest from '../../utils/fetch'

//export const limit = 5

export const request = new FetchRequest({
    prefix: `${CONFIG.API_HOST}`,
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': `${CONFIG.API_KEY}`,
    },
})
