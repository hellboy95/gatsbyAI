

import React from 'react'

export default function Address({ addressDetails }) {
    return (
        <div>
            <div className="row">
                {addressDetails.data.contactUsAddress.edges.map(({ node }) => {
                    return (
                        <div key={node.header1} className="col-lg-4 col-sm-3.5 mx-auto text-center py-5">
                            <h1>{node.header1}</h1>
                            <h3>{node.header2}</h3>
                            <p className="lead text-dark mb-5">{node.address.address}<br />
                                Telephone:{node.telephoneNumber}
                            </p>
                        </div>
                    );
                })}
                <div className="col-lg-12 col-sm-9 mx-auto text-center py-4">
                    <h3>Government Registration Numbers - GSTIN No: 33AAPFA0733K1ZJ</h3>
                </div>
                <div className="col-lg-12 col-sm-10 mx-auto text-center py-5">
                    <h1>Chief Management Team:</h1>
                </div>
                {addressDetails.data.contactUsTeam.edges.map(({ node }) => {
                    return (
                        <div key={node.name} className="col-lg-4 col-sm-3.5 mx-auto text-center">
                            <h2>{node.name}</h2>
                            <h3>({node.position})</h3>
                            <p className="lead text-dark mb-5">
                                Email :{node.email} <br />
                                Mobile :{node.mobile}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}