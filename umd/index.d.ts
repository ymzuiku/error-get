declare const errorGet: (fn: Promise<any> | ((...args: any[]) => Promise<any>), args?: any[] | undefined) => Promise<any>;
export default errorGet;
