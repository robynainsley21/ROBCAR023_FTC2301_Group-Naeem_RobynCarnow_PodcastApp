import React from 'react'

const Hero = () => {
    return (
        <>
            <div className='nav border-radius'>
               <a href='index.html'>
                    <img className='logo' src="podcast.png" alt="logo-image" />
                </a>
                <img className='settings' src="settings.png" alt="settings-image" />
            </div>
            <div className='logo-name'>
                <h1>Podify</h1>
            </div>
            <div className='search'>
                <input className='main-search border-radius' placeholder='Search by Name'/>
                <div className='alphabetical-buttons'>
                    <button className='border-radius'>Title A-Z</button>
                    <button className='border-radius'>Title Z-A</button>
                    <button className='border-radius'>Date A-Z</button>
                    <button className='border-radius'>Date Z-A</button>                           
                </div>
            </div>
        </>
       
    )
}

export default Hero