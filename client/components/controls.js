import React from 'react'
import { connect } from 'react-redux'
import {Button, ButtonGroup, ButtonToolbar} from 'react-bootstrap'

/**
 * COMPONENT
 */
const Controls = (props) => {

  return (
    <ButtonToolbar>
      <ButtonGroup>
        <Button>Scale</Button>
        <Button>Chord</Button>
        <Button>Custom</Button>
      </ButtonGroup>
    </ButtonToolbar>
  )
}

const mapState = (state) => {
  return {
    tuning: state.tuning
  }
}

export default connect(mapState)(Controls)
