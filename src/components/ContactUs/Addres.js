

import React from 'react'







export default function Address({ header,details }) {

    return (

        <div className="container-fluid banner py-3">

            <div className="row">

                <div className="col text-center py-2 mx-auto">

                    <h3 className="font-weight-bold text-uppercase text-center">{header}</h3>
    <h4 className="text-uppercase text-center">{details}</h4>

                </div>
                <div className="col text-center py-2 mx-auto">

<h3 className="font-weight-bold text-uppercase text-center">{header}</h3>
<h4 className="text-uppercase text-center">{details}</h4>

</div>
<div className="col text-center py-2 mx-auto">

<h3 className="font-weight-bold text-uppercase text-center">{header}</h3>
<h4 className="text-uppercase text-center">{details}</h4>

</div>


            </div>

        </div>



    )

}