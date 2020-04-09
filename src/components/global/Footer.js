import React from 'react'

export default function Footer() {
    return (
        <footer className="footer py-3">
            <div className="container">
                <dic className="row">
                    <div className="col 10 mx-auto col-md-6 text-white text-center text-capatalize">
                        <h4>
                            All Rights Reserved &copy;{new Date().getFullYear().toString()}
                        </h4>
                    </div>
                </dic>
            </div>
        </footer>
    )
}
