import { Container, Col, Row, Card, Button} from 'react-bootstrap'
import scifiBooks from '../data/scifi.json'
import { Component } from 'react'
import MyBadge from './MyBadge'

class LatestRelease extends Component {
    render() {
        return (
            <Container>
                <MyBadge color="dark" text="SALE%" />
                <Row className="justify-content-center">
                
                     {
                    scifiBooks.map((book => (
                        <Col md={2} key={book.asin}>
                            <Card className="bookCards">
                                <Card.Img variant="top" src={book.img} height="250px" />
                                <Card.Body>
                                    <Card.Title className="bookTitle">{book.title}</Card.Title>
                                    <Card.Text>
                                        Price: {book.price}€
                                    </Card.Text>
                                    <Button variant="primary">Add</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                    )
                    )}

                </Row>
            </Container>
        )
    }
}
export default LatestRelease

