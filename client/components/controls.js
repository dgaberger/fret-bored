import React from 'react'
import { connect } from 'react-redux'
import {Button, ButtonGroup, ButtonToolbar} from 'react-bootstrap'
import {editSelectType, editSelected} from '../store'

/**
 * COMPONENT
 */
const Controls = (props) => {
	let notes = ['A','Bb/A#','B','C','Db/C#','D','Eb/D#','E','F','Gb/F#','G','Ab/G#']
	notes = notes.map((name, idx) => [name, idx])
	const g1 = notes.slice(0,4)
	const g2 = notes.slice(4,8)
	const g3 = notes.slice(8,12)
	const {handleClick, handleType, selectType} = props

	return (
		<div>
			<label>Type:</label>
			<ButtonToolbar>
				<ButtonGroup>
					<Button onClick={handleType} value={'Scale'}>Scale</Button>
					<Button onClick={handleType} value={'Chord'}>Chord</Button>
					<Button onClick={handleType} value={'Custom'}>Custom</Button>
				</ButtonGroup>
			</ButtonToolbar>

			<label>Note(s)</label>
			{[g1, g2, g3].map( el => {
				return (
					<ButtonToolbar key={el}>
						<ButtonGroup>
							{el.map(el => {
								return (
									<Button 
										key={el[0]} 
										onClick={(e)=>handleClick(el[0],el[1], selectType)}>
										{el[0]}
									</Button>
								)
							})}
						</ButtonGroup>
					</ButtonToolbar>
				)
			})}
		</div>
	)
}

const mapState = (state) => {
	return {
		tuning: state.tuning,
		selectType: state.selectType
	}
}

const mapDispatch = (dispatch) => {
	return {
		handleClick(e, idx, selectType) {
			console.log('clicked note',idx, selectType)
			switch (selectType) {
			case 'Scale':
				let selected = [0,2,4,5,7,9,11]
				selected = selected.map(num => (num + +idx) % 12)
				return dispatch(editSelected(selected))
			default:
				return null
			}
		},
		handleType(e) {
			dispatch(editSelectType(e.target.value))
		}
	}
}

export default connect(mapState, mapDispatch)(Controls)
