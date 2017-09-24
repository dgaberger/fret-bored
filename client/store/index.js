import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import user from './user'
import tuning from './tuning'
import selected from './selected'
import selectType from './selectType'

const reducer = combineReducers({
	user,
	tuning,
	selected,
	selectType
})

const middleware = applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './tuning'
export * from './selected'
export * from './selectType'
