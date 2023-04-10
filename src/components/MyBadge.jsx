import Badge from 'react-bootstrap/Badge'

const MyBadge=({text, color})=>(
   <h1><Badge variant={color} text="light" id="badge1"> {text}</Badge></h1>
)

export default MyBadge