import React from 'react'
import { connect } from 'react-redux'
import { editTuning } from '../store'
/**
 * COMPONENT
 */

const Tuner = (props) => {
	const width = props.width || 40
	const tuning = props.tuning || []
	const string = props.string || 1
	const handleChange = props.handler

	return (
		<select onChange={(e) => handleChange(e, string, tuning)} style={{width: width}} defaultValue={tuning[string - 1]} >
			<option value="0">A</option>
			<option value="1">Bb/A#</option>
			<option value="2">B</option>
			<option value="3">C</option>
			<option value="4">Db/C#</option>
			<option value="5">D</option>
			<option value="6">Eb/D#</option>
			<option value="7">E</option>
			<option value="8">F</option>
			<option value="9">Gb/F#</option>
			<option value="10">G</option>
			<option value="11">Ab/G#</option>
		</select>
	)
}

export const Tuners = (props) => {
	const strings = props.strings || 6
	const tuning = props.tuning || []
	const handleChange = props.handleChange

	const mapper =[]
	for(let i = 0; i < strings; i++){
		mapper.push(<Tuner key={i} string={i+1} tuning={tuning} handler={handleChange}/>)
	}

	return ( 
		<div>
			{mapper.map((comp) => {
				return comp
			})}
		</div>
	)
}

const mapState = (state) => {
	return {
		tuning: state.tuning
	}
}

const mapDispatch = (dispatch) => {
	return {
		handleChange(e, string, tuning){
			tuning[string - 1] = +e.target.value
			dispatch(editTuning(tuning))
		}
	}
}

export default connect(mapState, mapDispatch)(Tuners)
