
/**
 * ACTION TYPES
 */
const GET_SELECT_TYPE = 'GET_SELECT_TYPE'
const EDIT_SELECT_TYPE = 'EDIT_SELECT_TYPE'

/**
 * INITIAL STATE
 */
const initSelectType = 'Scale'

/**
 * ACTION CREATORS
 */
export const getSelectType = selectType => ({type: GET_SELECT_TYPE, selectType})
export const editSelectType = selectType => ({type: EDIT_SELECT_TYPE, selectType})

/**
 * REDUCER
 */
export default function(state = initSelectType, action) {
	switch (action.type) {
	case GET_SELECT_TYPE:
		return action.selectType.slice()
	case EDIT_SELECT_TYPE:
		return action.selectType.slice()
	default:
		return state
	}
}
