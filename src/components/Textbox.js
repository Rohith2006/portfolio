import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Textbox.css'

function Textbox({ icon, heading, paragraph, color }){
    return (
        <div className = 'textbox-main'>
        <div className = 'textbox'>
            <div class = 'icon'>
            <FontAwesomeIcon icon={icon} color={color} />
            </div>
            <h1>{heading}</h1>
            <p>{paragraph}</p>
        </div>
        </div>
    );
}

export default Textbox;