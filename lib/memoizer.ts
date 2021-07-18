type FunArg = (param: number) => number;

export const memoizer = (fun: FunArg) => {
    const cache = new Map<number, number>();
    return (arg: number) => {
        if (cache.has(arg)) {
            return cache.get(arg);
        }
        const result = fun(arg);
        cache.set(arg, result);
        return result;
    }
}