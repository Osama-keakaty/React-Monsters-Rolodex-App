import { PureComponent } from "react";
import './search-box.styles.css';
class SearchBox extends PureComponent {

    render() {
        const {className , placeholder , onChangeHandler} = this.props
        return (
            <div className="search">
                <input
                    type="search"
                    placeholder={placeholder}
                    className={ `search-box ${className}`}
                    spellCheck={false}
                    onChange={onChangeHandler}
                />
            </div>

        );
    }
}

export default SearchBox;