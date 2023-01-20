import { useState } from "react"

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'

import "react-datepicker/dist/react-datepicker.css"

const SearchBar = (props) => {
    const [startDate, setStartDate] = useState(new Date())
    const [moveFrom, setMoveFrom] = useState('')
    const [moveTo, setMoveTo] = useState('')

    return (
        <InputGroup size="lg" className="mb-3">
            <Form.Control placeholder="From" value={moveFrom} onChange={(e) => setMoveFrom(e.target.value)} />
            <Form.Control placeholder="To" value={moveTo} onChange={(e) => setMoveTo(e.target.value)} />
            <Form.Control type="date" placeholder="Where" value={startDate} onChange={(e) => setStartDate(e.target.value)} />

            <Button onClick={() => { props.onSubmit(moveFrom, moveTo, startDate) }}variant="info" id="button-addon1"> Find! </Button>
        </InputGroup>
    )
}

export default SearchBar
