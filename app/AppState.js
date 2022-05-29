
import { Racer } from "./Models/Racer.js"

import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []

  /**@type {import ('./Models/Racer').Racer[]} */
  racers = [new Racer( 'Captain Falcon', 'blue', 'mute city', 0), new Racer('not captain falcon', 'red', 'not mute city', 0)]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
