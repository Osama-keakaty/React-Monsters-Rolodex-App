import { PureComponent } from "react";
import './card.styles.css';

class Card extends PureComponent {
    render() {
        const { id, name, email } = this.props.user;
        return (
            <div key={id} className='card-container'>
                <img
                    src={`https://robohash.org/${id}?set=set2&size=180x180`}
                    alt={`moster ${name}`}

                />
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        );
    }
}

export default Card; 
