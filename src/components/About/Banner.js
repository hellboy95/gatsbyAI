import React from 'react'



export default function Banner({header}) {
    return (
        <section className="banner py-3">
            <div className="container">
                    <div className="row">
                        <div className="col text-center mb-3">
                            <h3 className="display-5 font-weight-bold text-uppercase text-center mx-auto">{header}</h3>
                        </div>
                    
                    </div>
            </div>

        </section>
    )
}

