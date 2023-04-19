import React from "react";
import { BookStoreServiceContextConsumer } from '../book-store-service-context'

const withBookStoreService = () => (Wrapped) => {
    return (props) => {
        return (
            <BookStoreServiceContextConsumer>
                {
                    (bookStoreService) => {
                        return <Wrapped {...props} bookStoreService={bookStoreService}/>
                    }
                }
            </BookStoreServiceContextConsumer>
        )
    }
}

export default withBookStoreService