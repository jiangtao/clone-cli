/**
 * Thanks to: https://api.github.com/
 * git clone -u --name --q  
 */
import yargs from 'yargs'
import { getUserRepos, getOrgRepos } from './api'
import { warn } from './log'
import { client_id, client_secret } from './constants'
import clone from './clone'

const { u, name, q = {} } = yargs.argv

; (async function() {
    let repos
    if (!name) {
        warn('name invalid')
        return
    }
    try {
        repos = u ? await getUserRepos(name, Object.assign(q, { client_id, client_secret })) : await getOrgRepos(name, Object.assign(q, { client_id, client_secret }))
        await Promise.all(repos.map(item => clone(`git clone ${item.clone_url}`)))
    } catch (e) {
        warn(e)
    }
})()