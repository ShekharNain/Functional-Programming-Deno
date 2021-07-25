export const compose = (...args: any[]): any => {
    if (args.length < 1) return IdentityFn;
    if (args.length == 1) return args[0];
    const remainingArgs = args.slice(1);
    const composedFn = compose(...remainingArgs);
    return compose2(args[0], composedFn);
}

const compose2 = (g: any, f: any) => 
    ((x: any): any => g(f(x)));

const IdentityFn = (x: any): any => x;