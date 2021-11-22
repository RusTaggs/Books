import React, { Component } from 'react'
import request from 'superagent'
import SearchForm from './SearchForm'

const apiKey = "AIzaSyCp0o2uCDri2g3JTvNSTdxa3fT-l2IsimY";

export class Books extends Component {

    

    constructor(props){
        super(props);
        this.state = {
            books: [],
            searchField: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.searchField);
        request
                .get("https://www.googleapis.com/books/v1/volumes?q=" + this.state.searchField + "&key=" + apiKey + "&maxResults=40")
                .then((data) => {
                    console.log(data);
                });
    }

    handleSearch = (e) => {
        this.setState({searchField: e.target.value});
    }

    

    render() {
        return <div>
            <SearchForm handleSubmit={this.handleSubmit} handleSearch={this.handleSearch}/>
        </div>
    }
}

export default Books;