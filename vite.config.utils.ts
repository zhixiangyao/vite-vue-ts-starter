import fs from 'fs'
import dotenv from 'dotenv' // Dotenv 是一个零依赖的模块，它能将 env 变量中的变量从 '.env*' file 提取出来

interface ENV {
  [K: string]: string
}

export const getEnv = (mode: string) => {
  const envFileName = `.env.${mode}`
  const envObject = Object.create(null) as ENV

  try {
    const envConfig = dotenv.parse(fs.readFileSync(envFileName))
    for (const k in envConfig) Object.assign(envObject, { [k]: envConfig[k] })
    return envObject
  } catch (error) {
    console.error(error)
    return envObject
  }
}
