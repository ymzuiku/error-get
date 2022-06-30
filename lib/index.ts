export const errorGet = async (
  fn: Promise<any> | ((...args: any[]) => Promise<any>),
  args?: any[]
) => {
  let res: any;
  try {
    if (typeof fn === "function") {
      if (args) {
        res = await Promise.resolve(fn(...args));
      } else {
        res = await Promise.resolve(fn());
      }
    } else {
      res = await Promise.resolve(fn);
    }
  } catch (err) {
    res = err;
  }
  return res;
};

export default errorGet;
