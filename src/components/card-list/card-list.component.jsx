import { PureComponent } from 'react';
import Card from '../card/card.component.jsx'
import './card-list.styles.css';

class CardList extends PureComponent {
    users = (user) => {
        return (
            <Card user={user} />
        )
    }

    render() {
        const { users } = this
        return (
            <div className="card-list">
                {this.props.filteredMonsters.map(users)}
            </div>
        );
    }
}

export default CardList;