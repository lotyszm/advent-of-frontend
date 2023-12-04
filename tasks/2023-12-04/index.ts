export function memoize<T extends (...args: T[]) => T>(mainFn: T): T {

  if(typeof mainFn !== "function") {
    throw new Error('Function to be memoized must be a function.');
  }
  
  const memo = new Map<string, T>();

  return ((...args) => {

    const key = JSON.stringify(args);

    if(memo.has(key)){
      return memo.get(key);
    }
    
    const fn = mainFn(...args);

    memo.set(key, fn);

    return fn;
  }) as T;
}