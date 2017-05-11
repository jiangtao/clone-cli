// Thanks to: https://api.github.com
import { stringify } from 'qs'
import * as constants from './constants'
import { get } from './http'

export async function getOrgRepos(org, opts) {
    if (!org) {
        Promise.reject(noRepos)
        return
    }
    return await get(`https://api.github.com/orgs/${org}/repos?${stringify(opts)}`)
}

export async function getUserRepos(user, opts) {
    if (!user) {
        Promise.reject(constants.noRepos)
        return
    }
    return await get(`https://api.github.com/users/${user}/repos?${stringify(opts)}`)
}

export async function auth(user, pass) {
    if (!user) {
        Promise.reject(constants.invalidUser)
        return
    }
    if (!pass) {
        Promise.reject(constants.invalidPass)
        return
    }
    return await get(`https://api.github.com/user`, { user, pass })
}


