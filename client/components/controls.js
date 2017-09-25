import React from 'react'
import { connect } from 'react-redux'
import {Button, ButtonGroup, ToggleButton, ToggleButtonGroup, ButtonToolbar} from 'react-bootstrap'
import {editSelectType, editSelected, toggleSelected, editMajMin, editStrings} from '../store'

/**
 * COMPONENT
 */
const Controls = (props) => {
	let notesName = ['A','Bb/A#','B','C','Db/C#','D','Eb/D#','E','F','Gb/F#','G','Ab/G#']
	let notes = notesName.map((name, idx) => [name, idx])
	const g1 = notes.slice(0,4)
	const g2 = notes.slice(4,8)
	const g3 = notes.slice(8,12)
	const {handleClick, handleType, selectType, handleMajMin, handleStrings, majmin, selected, strings} = props
	let notesSelected = selected.map(num => notesName[num])
	notesSelected = notesSelected.join(', ')

	return (
		<div>
			<label>Strings: {strings}</label>
			<ButtonToolbar>
				<ButtonGroup>
					<Button onClick={handleStrings} value={1} bsStyle="primary">1</Button>
					<Button onClick={handleStrings} value={2} bsStyle="primary">2</Button>
					<Button onClick={handleStrings} value={3} bsStyle="primary">3</Button>
					<Button onClick={handleStrings} value={4} bsStyle="primary">4</Button>
					<Button onClick={handleStrings} value={5} bsStyle="primary">5</Button>
					<Button onClick={handleStrings} value={6} bsStyle="primary">6</Button>
				</ButtonGroup>
			</ButtonToolbar>

			<label>Type: {selectType}</label>
			<ButtonToolbar>
				<ButtonGroup>
					<Button onClick={handleType} value={'Scale'} bsStyle="primary">Scale</Button>
					<Button onClick={handleType} value={'Chord'} bsStyle="primary">Chord</Button>
					<Button onClick={handleType} value={'Custom'} bsStyle="primary">Custom</Button>
				</ButtonGroup>
			</ButtonToolbar>

			<label>Maj/Min: {majmin}</label>
			<ButtonToolbar>
				<ButtonGroup>
					<Button onClick={handleMajMin} value="Major" bsStyle="info">Maj</Button>
					<Button onClick={handleMajMin} value="Minor" bsStyle="info">Min</Button>
				</ButtonGroup>
			</ButtonToolbar>

			<label>Note(s): {notesSelected}</label>
			{[g1, g2, g3].map( el => {
				return (
					<ButtonToolbar key={el}>
						<ButtonGroup>
							{el.map(el => {
								return (
									<Button 
										key={el[0]} 
										onClick={(e)=>handleClick(el[0],el[1], selectType, majmin)}>
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
		selectType: state.selectType,
		majmin: state.majmin,
		selected: state.selected,
		strings: state.strings
	}
}

const mapDispatch = (dispatch) => {
	return {
		handleClick(e, idx, selectType, majmin) {
			console.log('clicked note',idx, selectType, majmin)
			let selected
			switch (selectType) {
			case 'Scale':
				selected = majmin === 'Major' ? [0,2,4,5,7,9,11] : [0,2,3,5,7,8,10]
				selected = selected.map(num => (num + +idx) % 12)
				return dispatch(editSelected(selected))
			case 'Chord':
				selected = majmin === 'Major' ? [0,4,7] : [0,3,7]
				selected = selected.map(num => (num + +idx) % 12)
				return dispatch(editSelected(selected))
			case 'Custom':
				return dispatch(toggleSelected(idx))
			default:
				return null
			}
		},
		handleType(e) {
			dispatch(editSelected([]))
			dispatch(editSelectType(e.target.value))
		},
		handleStrings(e) {
			dispatch(editSelected([]))
			dispatch(editStrings(e.target.value))
		},
		handleMajMin(e) {
			dispatch(editSelected([]))
			dispatch(editMajMin(e.target.value))
		}
	}
}

export default connect(mapState, mapDispatch)(Controls)
