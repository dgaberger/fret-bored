
/**
 * ACTION TYPES
 */
const GET_MAJMIN = 'GET_MAJMIN'
const EDIT_MAJMIN = 'EDIT_MAJMIN'

/**
 * INITIAL STATE
 */
const initMajMin = 'Major'

/**
 * ACTION CREATORS
 */
export const getMajMin = MajMin => ({type: GET_MAJMIN, MajMin})
export const editMajMin = MajMin => ({type: EDIT_MAJMIN, MajMin})

/**
 * REDUCER
 */
export default function(state = initMajMin, action) {
	switch (action.type) {
	case GET_MAJMIN:
		return action.MajMin.slice()
	case EDIT_MAJMIN:
		return action.MajMin.slice()
	default:
		return state
	}
}
