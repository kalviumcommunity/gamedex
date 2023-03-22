import React from 'react'
import Carousel from './Carousel/Carousel'
import Genre from './Genre/Genre'
import List from './List/List'
import Navbar from './Navbar/Navbar'
import { useState, useEffect } from 'react';
import Loading from '../Loading/Loading';

const Home = () => {
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 5000);
    }, [])

    return (isLoading ? (<Loading />) :
        <>
            <Navbar />
            <Carousel />
            <Genre />
            <List />
        </>
    )
}

export default Home