import { registerDecorator, ValidationOptions } from 'class-validator'
import { isCompany, isPerson } from 'kennitala'

export const IsNationalId = (validationOptions?: ValidationOptions) => {
  return (object: object, propertyName: string) => {
    registerDecorator({
      name: 'isNationalId',
      target: object.constructor,
      propertyName: propertyName,
      options: {
        message: `${propertyName} contains an invalid national id for a person`,
        ...validationOptions,
      },
      validator: {
        validate(value: unknown) {
          return (
            // Value length is 10 since isPerson only looks at digits in the string
            typeof value === 'string' && isPerson(value) && value.length === 10
          )
        },
      },
    })
  }
}

export const IsValidNationalId = (validationOptions?: ValidationOptions) => {
  return (object: object, propertyName: string) => {
    registerDecorator({
      name: 'IsValidNationalId',
      target: object.constructor,
      propertyName: propertyName,
      options: {
        message: `${propertyName} contains an invalid national id`,
        ...validationOptions,
      },
      validator: {
        validate(value: unknown) {
          return (
            // Value length is 10 since isPerson and isCompany only looks at digits in the string
            (typeof value === 'string' &&
              isCompany(value) &&
              value.length === 10) ||
            (typeof value === 'string' &&
              isPerson(value) &&
              value.length === 10)
          )
        },
      },
    })
  }
}
