import React, { Component } from 'react'
import request from 'superagent'
import SearchForm from './SearchForm'
import BookList from './BookList';

const apiKey = "AIzaSyCp0o2uCDri2g3JTvNSTdxa3fT-l2IsimY";

export class Books extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            books: [],
            searchField: '',
            sort: '',
            unsortedData: []
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.searchField);
        request
                .get("https://www.googleapis.com/books/v1/volumes?q=" + this.state.searchField 
                                                                        + "&key=" 
                                                                        + apiKey 
                                                                        + "&maxResults=30")
                .then((data) => {
                    console.log(data);
                    this.setState({ books: [...data.body.items]});
                    this.setState({ unsortedData: [...data.body.items]})
                });
    }

    handleSearch = (e) => {
        this.setState({searchField: e.target.value});
    }

    handleSort = (e) => {
        this.setState({sort: e.target.value});
    }

    render() {
        let sortedBooks = this.state.books.sort((a,b) => {
            if(this.state.sort === "Newest"){
                return parseInt(b.volumeInfo.publishedDate.substring(0,4) - a.volumeInfo.publishedDate.substring(0,4))
            }
        })

        if(this.state.sort === "Relevance"){
            sortedBooks = this.state.unsortedData
        }

        return <div>
            <SearchForm handleSubmit={this.handleSubmit} handleSearch={this.handleSearch} handleSort={this.handleSort}/>
            <BookList books={sortedBooks}/>
        </div>
    }
}

export default Books;