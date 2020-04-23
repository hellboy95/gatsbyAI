import React from 'react'

export default function Title({title}) {
    return (
        <div className = "container-fluid">
        <div className="row">
            <div className="col text-center mb-3">
                 <h1 className="display-4 font-weight-bold text-uppercase text-center mx-auto">{title}</h1>
            </div>
            
        </div>
        </div>
    )
}
