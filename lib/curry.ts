type Curry2Input<T> = (first: T, second: T) => T;

export const curry2 = 
    <T>(fn: Curry2Input<T>) => 
        (a: T) => 
            (b: T) => fn(a,b)


export const curry3 = <X, Y, Z, T>(fn: (x: X, y: Y, z: Z) => T) =>
    (x: X) => 
        (y: Y) => 
            (z: Z) => fn(x,y,z)