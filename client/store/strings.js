
/**
 * ACTION TYPES
 */
const GET_STRINGS = 'GET_STRINGS'
const EDIT_STRINGS = 'EDIT_STRINGS'

/**
 * INITIAL STATE
 */
const initStrings = 6

/**
 * ACTION CREATORS
 */
export const getStrings = Strings => ({type: GET_STRINGS, Strings})
export const editStrings = Strings => ({type: EDIT_STRINGS, Strings})

/**
 * REDUCER
 */
export default function(state = initStrings, action) {
	switch (action.type) {
	case GET_STRINGS:
		return state
	case EDIT_STRINGS:
		const strings = action.Strings
		return strings
	default:
		return state
	}
}
