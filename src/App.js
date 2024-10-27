import './App.css';
import { PureComponent } from 'react';
import ListCard from './components/card-list/card-list.component.jsx'
import SearchBox from './components/search-box/search-box.component.jsx'

class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      monsters: [],
      fieldValue: "",
    }
  }
  componentDidMount() {

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  changeSearchBox = (event) => {
    const fieldValue = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { fieldValue };
    })
  }

  render() {
    const { monsters, fieldValue } = this.state;
    const { changeSearchBox } = this;
    const filteredMonsters = monsters.filter((monster) => monster.name.toLocaleLowerCase().includes(fieldValue));

    return (
      <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox
          onChangeHandler={changeSearchBox}
          placeholder={"search monsters"}
          className={"box"}

        />
        <ListCard
          filteredMonsters={filteredMonsters}
        />
      </div >
    )
  }
}
export default App;

