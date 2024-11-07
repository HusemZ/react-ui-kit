export const isString = (value: unknown): value is string => typeof value === 'string'

export const isNumber = (value: unknown): value is number => typeof value === 'number'

export const isObject = (value: unknown): value is Record<string, any> =>
    typeof value === 'object' && value !== null && !Array.isArray(value)

export const isArray = (value: unknown): value is any[] => Array.isArray(value)

export const isNull = (value: unknown): value is null => {
    if (typeof value === 'string') return value === 'null'
    return value === null
}

export const isUndefined = (value: unknown): value is undefined => value === undefined