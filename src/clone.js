import { info } from './log'
export default async function runBash(command, options = {}) {
  return new Promise((resolve, reject) => {
    require('child_process').exec(command, options, (err, stdout, stderr) => {
      if (err) {
        reject(err)
        return
      }

      info(stderr)
      info(stdout)

      resolve(command)
    })
  })
}