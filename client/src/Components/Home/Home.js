import React from 'react'
import Carousel from './Carousel/Carousel'
import Genre from './Genre/Genre'
import List from './List/List'
import Navbar from './Navbar/Navbar'

const Home = () => {
    return (
        <>
            <Navbar />
            <Carousel />
            <Genre />
            <List />
        </>
    )
}

export default Home