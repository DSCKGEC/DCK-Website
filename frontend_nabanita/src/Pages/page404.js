import React from 'react'

function page404() {
    return (
        <div className="container mt-5" style={{
            height: '80%',
            textAlign: 'center',
            display: "flex",
            justifyContent: 'center',
            flexDirection: 'column'
        }}>
            <h1>404</h1>
            <p>Oops! We could not find what you were looking for</p>
        </div>
    )
}

export default page404
