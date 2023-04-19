import React, { Component } from "react";
import BookListItem from '../book-list-item'
import Spinner from '../spinner'
import ErrorIndicator from "../error-indicator";
import { connect } from "react-redux";
import { withBookStoreService } from '../hoc'
import { fetchBooks, bookAddedToCart } from '../../actions'
import { compose } from '../../utils'
import './book-list.css'

const BookList = ({ books, onAddedToCart }) => {
    return (
        <ul className="book-list">
            {
                books.map((book) => {
                    return (
                        <li key={book.id}>
                            <BookListItem 
                                book={book}
                                onAddedToCart={() => onAddedToCart(book.id)}/>
                        </li>
                    )
                })
            }
        </ul>
    )
}

class BookListContainer extends Component {

    componentDidMount() {
        this.props.fetchBooks();
    }

    render() {
        const { books, loading, error, onAddedToCart } = this.props

        if (loading) {
            return <Spinner />
        }

        if (error) {
            return <ErrorIndicator />
        }

        return <BookList 
            books={books}
            onAddedToCart={onAddedToCart}/>
    }
}

const mapStateToProps = ({ bookList: { books, loading, error }}) => {
    return { books, loading, error }
}

/*
// Вариант, при котором указывем явно, что хотим диспатчить
const mapDispatchToProps = (dispatch) => {
    return {
        booksLoaded: (newBooks) => {
            dispatch(booksLoaded(newBooks))
        }
    }
}
*/

// const mapDispatchToProps = {
//     booksLoaded, 
//     booksRequested,
//     booksError
// }

const mapDispatchToProps = (dispatch, ownProps) => {
    const { bookStoreService } = ownProps;
    return {
        fetchBooks: fetchBooks(bookStoreService, dispatch),
        onAddedToCart: (id) => dispatch(bookAddedToCart(id)) 
    }
} 

// вариант без compose
//export default withBookStoreService()(connect(mapStateToProps, mapDispatchToProps)(BookList))

export default compose(
    withBookStoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer)