import EventEmitter from 'events'

const _emiter = new EventEmitter();
_emiter.setMaxListeners(0)
export const Emiter =_emiter