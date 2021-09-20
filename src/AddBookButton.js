import React, { Component } from "react";
import { Button } from "react-bootstrap";
class AddBookButton extends Component {
  constructor() {
    super()
    this.state = {
      flag: false,
      delId: ''
    }
    this.x = ''
  }

  chang = (e) => {
    this.x = e.target.value;
  }
  render() {
    return (
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        width: "1000px",
        margin: "20px auto"
      }}
      >
        <Button variant="success" size="lg" onClick={this.props.onClick} >
          add New Book
        </Button>
        <input variant="success" size="lg" onChange={(e) => { this.chang(e) }} />
        <Button variant="success" size="lg" placeholder="put id to deleat" onClick={() => { this.props.delet(this.x) }} >
          delete Book
        </Button>
      </div>
    );
  }
}
export default AddBookButton;
