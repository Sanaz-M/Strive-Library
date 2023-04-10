import { Component } from "react"
import CommentList from "./CommentList"
import AddComment from "./AddComment"
import Loading from './Loading'
import Error from './Error'
import { useState, useEffect } from "react"


const CommentArea = ({ asin }) => {
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [comments, setComments] = useState([])

    useEffect(() => {
        const fetchComments = async () => {
            setIsLoading(true);
            try {
                const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + asin, {
                    method: 'GET',
                    headers: {
                        "Content-type": 'application/json',
                        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOGJmM2FhY2FhMjAwMTU1MmExNmQiLCJpYXQiOjE2MzcyMzcxNDgsImV4cCI6MTYzODQ0Njc0OH0.bGH7oKZ2DmaBqKIQ4q27EGd5vqPUeLULKXRMrXg7YLs"
                    }
                })
                if (response.ok) {
                    const data = await response.json()
                    setComments(data);
                    setIsLoading(false);
                    setIsError(false);
                } else {
                    console.log('error while fetching')
                    setIsLoading(false);
                    setIsError(true);
                }
            } catch (e) {
                console.log(e)
                setIsLoading(false);
                setIsError(true);
            }
        }
        fetchComments()
    }
        , [asin]);


    return(
        <div>
            {isLoading && <Loading />}
            {isError && <Error />}
            <AddComment asin={asin} />
            <CommentList previousComments={comments} />
        </div>
    )
}


// class CommentArea extends Component {

//     state = {
//         comments: [],
//         isLoading: false,
//         isError: false
//     }


//     componentDidUpdate = async (prevProps) => {
//         if (prevProps.asin !== this.props.asin) {
//             this.setState({
//                 isLoading: true
//             });

//             try {
//                 const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin, {
//                     method: 'GET',
//                     headers: {
//                         "Content-type": 'application/json',
//                         Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOGJmM2FhY2FhMjAwMTU1MmExNmQiLCJpYXQiOjE2MzU5NDU0NTksImV4cCI6MTYzNzE1NTA1OX0.68CC8Jf4IHn7VZW39FPf-bHEv8MKux00DbaR2yT026Y"
//                     }
//                 })
//                 if (response.ok) {
//                     const data = await response.json()
//                     this.setState({
//                         comments: data,
//                         isLoading: false,
//                         isError: false
//                     })
//                 } else {
//                     console.log('error while fetching')
//                     this.setState({ isLoading: false, isError: true });
//                 }
//             } catch (e) {
//                 console.log(e)
//                 this.setState({ isLoading: false, isError: true });
//             }
//         }
//     }

//     render() {
//         return (
//             <div>
//                 {this.state.isLoading && <Loading />}
//                 {this.state.isError && <Error />}
//                 <AddComment asin={this.props.asin} />
//                 <CommentList previousComments={this.state.comments} />
//             </div>
//         );
//     }
// }


export default CommentArea