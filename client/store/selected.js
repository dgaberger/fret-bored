
/**
 * ACTION TYPES
 */
const GET_SELECTED = 'GET_SELECTED'
const EDIT_SELECTED = 'EDIT_SELECTED'
const TOGGLE_SELECTED = 'TOGGLE_SELECTED'

/**
 * INITIAL STATE
 */
const initSelected = [] //[0,2,4,5,7,9,11]

/**
 * ACTION CREATORS
 */
export const getSelected = tuning => ({type: GET_SELECTED, tuning})
export const editSelected = tuning => ({type: EDIT_SELECTED, tuning})
export const toggleSelected = idx => ({type: TOGGLE_SELECTED, idx})

/**
 * REDUCER
 */
export default function(state = initSelected, action) {
	switch (action.type) {
	case GET_SELECTED:
		return action.tuning.slice()
	case EDIT_SELECTED:
		return action.tuning.slice()
	case TOGGLE_SELECTED:
		let current = state.slice()
		if (current.includes(action.idx)) {
			current = current.filter(el => el !== action.idx)
			return current
		} else {
			current.push(action.idx)
		}
		return current
	default:
		return state
	}
}
