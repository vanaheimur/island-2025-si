import Joi from 'joi'
import { DeepRequired } from 'utility-types'

const config = () => {
  const values = {
    baseUrl: process.env.RSK_API_BASE_URL,
  }

  const schema = Joi.object({
    baseUrl: Joi.string().uri().required(),
  })

  const { error } = schema.validate(values, { allowUnknown: false })

  if (error) {
    throw new Error(
      `Config validation error in rsk connection module: ${error.message}`,
    )
  }

  return {
    rskConnection: values,
  }
}

export type RskConnectionConfig = DeepRequired<ReturnType<typeof config>>

export default config
