class Store {
	constructor(reducer) {
		this.cbs = []
		this.reducer = reducer
		console.log(this.reducer)
		this.state = this.reducer({},{type:null}) 	
	}
	subscribe(cb) {
		this.cbs.push(cb)
	}
	getState() {
		return this.state
	}
	dispatch(action) {
		this.state = this.reducer(this.state,action)
		this.cbs.forEach((cb)=>cb())
	}
}
const createStore = (reducer)=>{
	return  new Store(reducer)
}
const combineReducer = (reducerObj) => {
	return (state,action)=>{
		console.log(action)
		var newState = Object.assign({},state)
		Object.keys(reducerObj).forEach((key)=>{
			console.log(key)
			const cb = reducerObj[key]
			const updatedState = {}
			updatedState[key] = cb(newState[key],action)
			console.log(updatedState)
			
			newState = Object.assign({},newState,updatedState)
		})
		return newState
	}
}

