import React from 'react'
import HomePageContent from './HomePageContent'
import Navigation from './Navigation'

function Home() {
    return (
        <>
            <div className='Main__Home__Page overflow-hidden'>
                <Navigation />
                <HomePageContent />
            </div>
        </>
    )
}

export default Home
