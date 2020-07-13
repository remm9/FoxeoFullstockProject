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

    searchKeyPress(e) {
        e = e || window.event;
        if (e.keyCode == 13) {
            document.getElementById('search-button').click();
            return false;
        }
        return true;
    }

    handleSearch() {   
        document.getElementById("search-input")
            .addEventListener("keydown", function (event) {
            // event.persist();
            if (event.keyCode === 13) {
                document.getElementById("search-button").click();
            }
        });
        this.setState( {
            searchItem: "",
        })
    };

    render() {

        return (
            <div id="search-form">
                <form >
                    <input //onKeyDown={this.searchKeyPress}
                        type="text"
                        id="search-input"
                        placeholder="Search videos"
                        value={this.state.searchItem}
                        onChange={this.update()}
                    />
                    <button type="submit" id="search-button" onClick={this.handleSearch}>
                        <Link to={`/search?search=${this.state.searchItem}`}><img id="search-icon" src="https://image.flaticon.com/icons/svg/49/49116.svg" alt="" /></Link>
                    </button>
                </form>
            </div>
        );
    }
}

export default SearchBar;