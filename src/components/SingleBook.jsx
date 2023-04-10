// import { Component } from 'react'
import { Col, Card, Button } from 'react-bootstrap'
// import CommentArea from './CommentArea'
// import book from '../data/scifi.json'


const SingleBook = ({ changeSelectedBook, selectedBook, book }) => {
    return (
        <Col md={3}>
            <Card className="bookCards1" onClick={() => changeSelectedBook(book.asin)} style={{ border: selectedBook === book.asin ? "2px solid green" : "none" }}>
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                    <Card.Title className="bookTitle">{book.title}</Card.Title>
                    <Card.Text>
                        Price: {book.price}€
                    </Card.Text>
                    <Button variant="success">Add</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}


// class SingleBook extends Component {

//     state = {
//         selectedBook: false,
//     }

//     render() {
//         return (
//             <Row>
//             <Col md={4} className="mb-1" key={book.asin}>
//                 <Card className="bookCards1" onClick={() => this.setState({ selectedBook: !this.state.selectedBook })} style={{ border: this.state.selectedBook ? "2px solid green" : "none" }}>
//                     <Card.Img variant="top" src={this.props.img} style={{ width: "250px" }} />
//                     <Card.Body>
//                         <Card.Title className="bookTitle">{this.props.title}</Card.Title>
//                         <Card.Text>
//                             Price: {this.props.price}€
//                         </Card.Text>
//                         <Button variant="success">Add</Button>
//                     </Card.Body>
//                 </Card>
//                 </Col>
//                 <Col md={8} className="my-1" key={book.asin}>
//                 {
//                      this.state.selectedBook && <CommentArea asin={this.props.asin} />
//                 }
//                 </Col>
//                 </Row>
//         )
//     }

// }

export default SingleBook