const booksLoaded = (newBooks) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBooks
    }
}

const booksRequested = () => {
    return {
        type: 'FETCH_BOOKS_REQUEST'
    }
}

const booksError = (error) => {
    return {
        type: 'FETCH_BOOKS_FAILURE',
        payload: error
    }
}

const bookAddedToCart = (id) => {
    return {
        type: 'BOOK_ADDED_TO_CART',
        payload: id
    }
}

const bookRemoveFromCart = (id) => {
    return {
        type: 'BOOK_REMOVE_FROM_CART',
        payload: id
    }
}

const allBookRemoveFromCart = (id) => {
    return {
        type: 'ALL_BOOK_REMOVE_FROM_CART',
        payload: id
    }
}

const fetchBooks = (bookStoreService, dispatch) => () => {
    dispatch(booksRequested());
    bookStoreService
        .getBooks()
        .then((data) => dispatch(booksLoaded(data)))
        .catch((err) => dispatch(booksError(err)))
}

export {
    fetchBooks,
    bookAddedToCart,
    bookRemoveFromCart,
    allBookRemoveFromCart
}