import React from "react";
import Book from "./Book";
import axios from "axios";
import BookFormModal from "./BookFormModal";
import AddBookButton from "./AddBookButton";
import FormUpdate from "./FormUpdate";
import { Row } from "react-bootstrap";
const BOOK_KEY_PORT = process.env.REACT_APP_BACKEND_URL;
class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showBookFormModal: false,
      showForm: false,
      title: "",
      description: "",
      status: "",
      email: "",
      id: "",
    };
  }
  /* TODO(Done): Make a GET request to your API to fetch books for the logged in user  */

  componentDidMount() {
    this.getBooks();
  }

  getBooks = async () => {
    const bookServer = `${BOOK_KEY_PORT}/books`;
    try {
      const res = await axios.get(bookServer);
      this.setState({ books: res.data });
    } catch (error) {
      console.log(error);
    }
  };
  onButtonClick = () => {
    this.setState({
      flag: true,
    });
  };
  closeModal = () => {
    this.setState({
      flag: false,
    });
  };
  updateData = () => {
    this.getBooks();
  };
  deleatOne = (item) => {
    axios.delete(`${process.env.REACT_APP_BACKEND_URL}/del-book/${item}`);
    window.location.reload(false);
  };

  update = () => {
    this.setState({
      showForm: true,
    });
  };

  handlerUpdateForm = async (e) => {
    console.log(e);
    this.setState({
      id: e.target.id.value,
      title: e.target.title.value,
      description: e.target.description.value,
      email: e.target.email.value,
      status: e.target.status.checked,
    });

    let config = {
      method: "PUT",
      baseURL: process.env.REACT_APP_BACKEND_URL,
      url: `/update-book/${this.state.id}`,
      data: {
        title: this.state.title,
        description: this.state.description,
        status: this.state.status,
        email: this.state.email,
      },
    };
    await axios(config).then((res) => {
      this.setState({
        Book: res.data,
        showForm: false
      });
    }).catch(e => console.log(e));
  };

  render() {
    return (
      <div>
        <BookFormModal
          show={this.state.flag}
          onHide={this.closeModal}
          updateData={this.updateData}
        />
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        {this.state.books.length > 0 ? (
          <Book books={this.state.books} />
        ) : (
          <h3>No Books Found </h3>
        )}
        <Row
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {" "}
          {this.state.showForm ? (
            <FormUpdate handlerUpdateForm={this.handlerUpdateForm} />
          ) : (
            <p></p>
          )}
        </Row>
        <AddBookButton
          update={this.update}
          onClick={this.onButtonClick}
          delet={this.deleatOne}
        />
      </div>
    );
  }
}
export default BestBooks;
