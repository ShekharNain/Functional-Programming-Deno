type Curry2Input<T> = (first: T, second: T) => T;

export const curry2 = 
    <T>(fn: Curry2Input<T>) => 
        (a: T) => 
            (b: T) => fn(a,b)