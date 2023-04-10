import Form from 'react-bootstrap/Form'
import SingleBook from './SingleBook'
// import { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CommentArea from './CommentArea'
import { useState, useEffect } from "react";


const BookList = ({ books }) => {

    const [query, setQuery] = useState('')
    const [selectedBook, setSelectedBook] = useState(null)

    const filterBookList = () => {
        return books.filter(book => book.title.toLowerCase().includes(query))
    }

    return (
        <Container>
            <Row>
                <Col md={8}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Search</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Search"
                            value={query}
                            onChange={e => setQuery(e.target.value)}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col md={8}>
                    <Row>
                    {
                        filterBookList().map(book => (

                            <SingleBook
                                key={book.asin}
                                book={book}
                                selectedBook={selectedBook}
                                changeSelectedBook={asin => setSelectedBook(asin)} />
                        ))
                    }
                    </Row>
                </Col>
                <Col md={4}>
                    <CommentArea asin={selectedBook} />
                </Col>
            </Row>
        </Container>
    )
}
// class BookList extends Component {
//     state = {
//         query: "",
//     }

//     filterBookList() {
//         return books.filter((book) => book.title.toLowerCase().includes(this.state.query));
//     }

//     render() {
//         return (
//             <Container>
//                 <Row>
//                     <Form.Group className="searchBar1">
//                         <Form.Label>Search</Form.Label>
//                         <Form.Control 
//                             id="searchBar"
//                             type="text"
//                             placeholder="search"
//                             value={this.state.query}
//                             onChange={e => this.setState({ query: e.target.value })}
//                         />
//                     </Form.Group>
//                 </Row>
//                 <Row>
//                     {this.filterBookList().map((book => (
//                         <Col md={12} className="my-5" key={book.asin}>
//                             <SingleBook title={book.title} img={book.img} price={book.price} asin={book.asin}/>
//                         </Col>

//                     )))}
//                 </Row>
//             </Container>
//         )
//     }

// }


export default BookList