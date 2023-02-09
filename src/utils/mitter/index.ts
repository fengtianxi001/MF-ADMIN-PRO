export type EventType = string | symbol;
export type Handler<T = any> = (event?: T) => void;
export type WildcardHandler = (type: EventType, event?: any) => void;
export type EventHandlerList = Array<Handler>;
export type WildCardEventHandlerList = Array<WildcardHandler>;
export type EventHandlerMap = Map<
  EventType,
  EventHandlerList | WildCardEventHandlerList
>;

class Mitter {
  all: EventHandlerMap;
  constructor(all?: EventHandlerMap) {
    this.all = all || new Map();
  }
  on<T = any>(type: EventType, handler: Handler<T>) {
    const handlers = this.all.get(type);
    const added = handlers && handlers.push(handler);
    if (!added) {
      this.all.set(type, [handler]);
    }
  }
  off<T = any>(type: EventType, handler: Handler<T>) {
    const handlers = this.all?.get(type);
    if (handlers) {
      handlers.splice(handlers.indexOf(handler) >>> 0, 1);
    }
  }
  emit<T = any>(type: EventType, evt?: T) {
    ((this.all?.get(type) || []) as EventHandlerList).slice().map((handler) => {
      handler(evt);
    });
    ((this.all?.get("*") || []) as WildCardEventHandlerList)
      .slice()
      .map((handler) => {
        handler(type, evt);
      });
  }
  clear() {
    this.all.clear();
  }
}

export default Mitter;
