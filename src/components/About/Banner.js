import React from 'react'



export default function Banner({header}) {
    return (
            <div className="container-fluid py-3">
                    <div className="row">
                        <div className="col text-center py-2 mx-auto">
                            <h3 className="font-weight-bold text-uppercase text-center">{header}</h3>
                        </div>
                    
                    </div>
            </div>

    
    )
}

