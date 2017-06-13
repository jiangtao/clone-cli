import Request from 'request'
import { noRepos } from './error'

export async function get(url, auth) {
    return new Promise((resolve, reject) => {
        let options = {
            url,
            json: true,
            method: 'GET',
            headers: {
                'User-Agent': 'jiangtao-git-clone'
            },
            auth
        }

        Request(options, (err, response, body) => {
            if (err) {
                reject(err)
                return
            }
            if (response.statusCode == 200) {
                resolve(body)
                return
            }

            reject(noRepos)
        })
    })
}