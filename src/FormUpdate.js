import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

class FormUpdate extends Component {
    render() {
        return (
            <div className="col-5" style={{
                width: "1000px",
                margin: "20px auto"
            }}>  <Form onSubmit={this.props.update}>
                    <Form.Group className="mb-3" controlId="title">
                        <Form.Label>Book ID</Form.Label>
                        <Form.Control type="id" placeholder="Input book id" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="title" placeholder="Input book title" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            type="description"
                            placeholder="Input book description"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Input your email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="status">
                        <Form.Check type="checkbox" label="Read" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Update
                    </Button>
                </Form></div>
        )
    }
}

export default FormUpdate
