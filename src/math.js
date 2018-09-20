 if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

export function square (x) {
    return x * x
}

export function cube (x) {
    return x * x * x
}