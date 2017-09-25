import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import user from './user'
import tuning from './tuning'
import selected from './selected'
import selectType from './selectType'
import majmin from './majmin'
import strings from './strings'

const reducer = combineReducers({
	user,
	tuning,
	selected,
	selectType,
	majmin,
	strings
})

const middleware = applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './tuning'
export * from './selected'
export * from './selectType'
export * from './majmin'
export * from './strings'
