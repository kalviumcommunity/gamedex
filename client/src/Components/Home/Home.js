import React from 'react'
import Carousel from './Carousel/carousel'
import Genre from './Genre/genre'
import List from './List/list'
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