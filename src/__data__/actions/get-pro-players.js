import axios from 'axios'

export default async (length) => {
 const result = await axios('https://api.opendota.com/api/proPlayers/', {
        method: 'GET',
        params: {}
    })

    result.data.length = length;

    return result.data
}