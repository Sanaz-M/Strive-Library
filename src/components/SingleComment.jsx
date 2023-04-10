import { Button, ListGroup } from "react-bootstrap";
import {RiDeleteBinLine} from 'react-icons/ri'


const deletComment = async (asin) =>{
    try{
        let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + asin, {
          method: "DELETE",
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOGJmM2FhY2FhMjAwMTU1MmExNmQiLCJpYXQiOjE2MzU5NDU0NTksImV4cCI6MTYzNzE1NTA1OX0.68CC8Jf4IHn7VZW39FPf-bHEv8MKux00DbaR2yT026Y"
                }
            });
            if (response.ok) {
                alert("comment deleted!");
              } else {
                alert("comment NOT deleted!");
              }
            } catch (error) {
              alert("comment NOT deleted!");
            }
}

const SingleComment = ({ comment }) => (
    <ListGroup.Item>
      {comment.comment}
      <div className="my-2"><strong>rate:{comment.rate}</strong></div>
      <Button
      style={{display: "block"}}
        variant="danger"
        className="ml-2"
        onClick={() => deletComment(comment._id)}
      >
        <RiDeleteBinLine />
      </Button>
    </ListGroup.Item>
  );
  
  export default SingleComment;
  