/**
 * Thanks to: https://api.github.com/
 * git clone -u --name --q  
 */
import { getUserRepos, getOrgRepos } from './api'
import { log, warn } from './log'
import { client_id, client_secret } from './constants'
import Package from '../package.json'
import clone from './clone'
import minimist from 'minimist'
const yargs = minimist(process.argv.slice(2))
const { u, name, q = {}, version, v } = yargs

; (async function() {
  let repos

  if (version || v) {
    log(`clone version: ${Package.version}`)
  }

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
