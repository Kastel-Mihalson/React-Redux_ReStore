import React from "react";

const {
    Provider: BookStoreServiceContextProvider,
    Consumer: BookStoreServiceContextConsumer
} = React.createContext()

export {
    BookStoreServiceContextProvider,
    BookStoreServiceContextConsumer
}