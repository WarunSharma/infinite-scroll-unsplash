declare module 'universal-config' {
    const config: {
        get(key: string): any
    };
    export = config;
}