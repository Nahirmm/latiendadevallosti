import './Spinner.css'
import { Spinner as SpinnerBt} from 'react-bootstrap'

function Spinner() {

    return (
        <div className='divSpinner'>
            <SpinnerBt animation="border" size="sm" />
            <SpinnerBt animation="border" />
            <SpinnerBt animation="border" size="sm" />
        </div>
    )
}

export default Spinner
