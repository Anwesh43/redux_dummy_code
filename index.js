const addCreator = (id) => ({type:'action',data:{id}})
const selectedActionCreator = (id) => ({id})
const deleteActionCreator = (id) => ({id})
const todos = (state=[],action) => {
	console.log(action)
	if(action.type == 'ADD') {
		state.push(action.data)
	}
	if(action.type == 'DELETE') {
		state.splice(action.id,1)
	} 
	return state
}
const selected = (state=-1,action) => {
	if(action.type == 'SELECTED') {
		state = action.id
	}
	return state
} 

const store = createStore(combineReducer({todos,selected}))
store.subscribe(()=>{
	console.log(store.getState())
})

