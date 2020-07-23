import React from "react";
import { Link, Redirect } from 'react-router-dom';


class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchItem: "",
            search: false,
        };
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update() {
        return e => this.setState({ searchItem: e.currentTarget.value });
    }

    componentDidUpdate() {
        if (this.state.search) {
            this.setState({ 
                search: false, 
            });
        }
    }

    handleSubmit() {   
        this.setState( {
            search: true,
        })
    };

    render() {
        var searchResults = this.state.search ? 
        <Redirect to={`/search?search=${this.state.searchItem}`}>
            <img id="search-icon" src="https://image.flaticon.com/icons/svg/49/49116.svg" alt="" />
        </Redirect> 
        : null;

        return (
            <div id="search-form">
                <form onSubmit={() => this.handleSubmit()}> 
                    <input
                        type="text"
                        id="search-input"
                        placeholder="Search videos"
                        value={this.state.searchItem}
                        onChange={this.update()}

                    />
                    <button type="submit" id="search-button" onClick={this.handleSubmit}>
                        <Link to={`/search?search=${this.state.searchItem}`}>
                            <img id="search-icon" src="https://image.flaticon.com/icons/svg/49/49116.svg" alt="" />
                        </Link> 
                    </button> 
                    {searchResults}
                </form>
            </div>
        );
    }
}

export default SearchBar;