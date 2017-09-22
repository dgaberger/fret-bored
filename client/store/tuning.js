
/**
 * ACTION TYPES
 */
const GET_TUNING = 'GET_TUNING'
const EDIT_TUNING = 'EDIT_TUNING'

/**
 * INITIAL STATE
 */
const initTuning = [7,0,5,10,2,7]

/**
 * ACTION CREATORS
 */
export const getTuning = tuning => ({type: GET_TUNING, tuning})
export const editTuning = tuning => ({type: EDIT_TUNING, tuning})

/**
 * REDUCER
 */
export default function(state = initTuning, action) {
	switch (action.type) {
	case GET_TUNING:
		return action.tuning.slice()
	case EDIT_TUNING:
		return action.tuning.slice()
	default:
		return state
	}
}
