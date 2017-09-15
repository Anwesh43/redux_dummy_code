class Store {
	constructor(reducer) {
		this.cbs = []
		this.reducer = reducer
		this.state = this.reducer({}) 	
	}
	subscribe(cb) {
		this.cbs.push(cb)
	}
	getState() {
		return this.state
	}
	dispatch(action) {
		this.state = this.reducer(action)
		this.cbs.forEach((cb)=>cb())
	}
}
const createStore = (reducer)=>{
	this.store = new Store(reducer)
}
const combineReducer = (reducerObj) => {
	return (action)=>{
		var newState = {}
		Object.values(reducerObj).forEach((cb)=>{newState = Object.assign({},newState,cb(action))})
		return newState
	}
}

