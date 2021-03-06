import React from 'react'
import { connect } from 'react-redux'
import SingleFret from './single-fret'
import Tuners from './tuners'
import Controls from './controls'
import Nut from './nut'

/**
 * COMPONENT
 */
export const FretBoard = (props) => {
	const strings = props.strings || 6
	const frets = props.frets || 30
	const initHeight = props.initHeight || 150
	const tuning = props.tuning || []

	const oneFret = (strings, height, fretNum) => {
		const result = []
		for (let i = strings; i > 0; i--) {
			const key = [i, fretNum + 1]
			result.push(<SingleFret height={height} key={key} SF={key}/>)
		}
		return (
			<div key={fretNum + 1}>
				{result.map((comp) => comp)}
			</div>
		)
	}

	const theNut = (strings, height, fretNum) => {
		const result = []
		for (let i = strings; i > 0; i--) {
			const key = [i, fretNum + 1]
			result.push(<Nut height={height} key={key} SF={key}/>)
		}
		return (
			<div key={fretNum + 1}>
				{result.map((comp) => comp)}
			</div>
		)
	}

	const fretsArr = []
	fretsArr.push(theNut(strings, 30, -1))
	for (let i = 0; i < frets; i++) {
		const fretRow = oneFret(strings, Math.pow(.944, i) * initHeight, i)
		fretsArr.push(fretRow)
	}

	return (
		<div className="container">
			<div className="row">
				<div className="col-xs-5">
					<Tuners strings={strings}/>
					<div> 
						{fretsArr.map((comp) => comp)}
					</div>
				</div>
				<div className="col-xs-5">
					<Controls/>
				</div>
			</div>
		</div>
	)
}

const mapState = (state) => {
	return {
		tuning: state.tuning,
		strings: state.strings
	}
}

export default connect(mapState)(FretBoard)