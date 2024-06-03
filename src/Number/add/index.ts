const add = (...args: number[]) => {
    return args.reduce((prev, cur, index, acc) => cur + prev, 0)
}

export default add