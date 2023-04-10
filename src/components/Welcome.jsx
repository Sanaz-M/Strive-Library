import { Jumbotron , Row } from "react-bootstrap";

const Welcome = () =>(
    <div>
        <Jumbotron className="jumbotron1">
            <Row className="its-a-row">
              {/* <img src="https://cdn.pixabay.com/photo/2016/12/08/15/45/panda-1892023_960_720.png" /> */}
              <span><p>Welcome to</p><p> my Book Shop</p>
              <h4>Start Your Journey</h4></span>
            </Row>
        </Jumbotron>
    </div>
)

export default Welcome