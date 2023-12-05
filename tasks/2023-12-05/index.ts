export class ChristmasEmitter {
  
  callbackCache = new Map<string, Function[]>();

  constructor() {}

  on(event: string, callback: Function) {
    if(this.callbackCache.get(event)) {
      this.callbackCache.get(event)?.push(callback);
    } else {
      this.callbackCache.set(event, [callback]); 
    }
  } 

  off(event: string, callback: Function) {
    // this.callbackCache.set(event, this.callbackCache.get(event)?.filter((fn) => fn !== callback));
    if(this.callbackCache.has(event)) {
      this.callbackCache.delete(event);
    }
  } 

  emit(event: string) {
    this.callbackCache.get(event)?.forEach((fn) => {
      fn();
    })
  }

}