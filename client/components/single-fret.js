import React from 'react'
import { connect } from 'react-redux'

const fretImg = "rosewood_bs.jpg"
const selectedImg = "rosewood_sel.jpg"
const rootImg = "rosewood_root.jpg"

/**
 * COMPONENT
 */
const SingleFret = (props) => {
	const height = props.height || '200'
	const width = props.width || '40'
	const SF = props.SF || []
	const tuning = props.tuning || []
	const noteVal = (tuning[6 - SF[0]] + SF[1]) % 12
	const selected = props.selected

	const handleClick = (SF, tuning) => {
		console.log('clicked note: ', noteVal)
	}

	if (!selected.includes(noteVal)){
		return <img src={fretImg} height={height} width={width} onClick={() => handleClick(SF, tuning)}/>
	} else {
		if (selected[0] === noteVal) return <img src={rootImg} height={height} width={width} onClick={() => console.log('special')}/>
	    return <img src={selectedImg} height={height} width={width}/>
	}
}

const mapState = (state) => {
	return {
		tuning: state.tuning,
		selected: state.selected
	}
}

export default connect(mapState)(SingleFret)
