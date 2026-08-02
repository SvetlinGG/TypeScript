function customTypeGuard(param: unknown): param is string{
    return (
        Array.isArray(param) &&
        param.length > 0 &&
        typeof param[0] === 'string'
    )
}
