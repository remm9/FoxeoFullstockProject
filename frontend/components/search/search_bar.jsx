import React from "react";
import { Link } from 'react-router-dom';


class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchItem: "",
        };
        this.update = this.update.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    update() {
        return e => this.setState({ searchItem: e.currentTarget.value });
    }

    handleSearch(e) {   
        e.preventDefault();
        this.setState( {
            searchItem: "",
        })
    };

    render() {

        return (
            <div className="search-form">
                <form onClick={this.handleSearch} >
                    <input type="text"
                        className="search-input"
                        placeholder="Search videos"
                        value={this.state.searchItem}
                        onChange={this.update()}
                    />
                    <button id="search-button">
                        <Link to={`/search?search=${this.state.searchItem}`}><img id="search-icon" src="https://image.flaticon.com/icons/svg/49/49116.svg" alt="" /></Link>
                    </button>
                </form>
            </div>
        );
    }
}

export default SearchBar;