import React from 'react'

function Loader() {
    return (
        <div className='min-vh-100 d-flex justify-content-center align-items-center'>
            <strong className='position-absolute'>Loading...</strong>
            <div className="spinner-border" style={{width: "8rem", height: "8rem"}} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Loader