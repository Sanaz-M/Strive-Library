import { Alert } from 'react-bootstrap'

const WarningSign = (props) => (
    <Alert id="alert1" variant="danger">{props.text}</Alert>
)

export default WarningSign