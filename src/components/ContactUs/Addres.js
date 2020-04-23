

import React from 'react'







export default function Address({ header,details }) {

    return (

//         <div className="container-fluid banner py-3">

//             <div className="row">

//                 <div className="col text-center py-2 mx-auto">

//                     <h3 className="font-weight-bold text-uppercase text-center">{header}</h3>
//     <h4 className="text-uppercase text-center">{details}</h4>

//                 </div>
//                 <div className="col text-center py-2 mx-auto">

// <h3 className="font-weight-bold text-uppercase text-center">{header}</h3>
// <h4 className="text-uppercase text-center">{details}</h4>

// </div>
// <div className="col text-center py-2 mx-auto">

// <h3 className="font-weight-bold text-uppercase text-center">{header}</h3>
// <h4 className="text-uppercase text-center">{details}</h4>

// </div>


//             </div>

//         </div>

<div>

<div className="row">

    {/* <div >

        <h3 >{header}</h3>
<h4 >{details}</h4>

    </div> */}

<div className="col-lg-10 col-sm-8 col-xs-4 mx-auto text-center">
                        <p className="lead text-dark mb-5">
                            We are a family owned OEM manufacturing company producing high quality products for nation leading kitchen applicance brands. Drawing from 30 years of manufacturing experience, we bring
                            unparalled technical expertise and proven management practices to deliver the best results. 
                        </p>
                        </div>

                        <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-dark mb-5">
                            We are a family owned OEM manufacturing company producing high quality products for nation leading kitchen applicance brands. Drawing from 30 years of manufacturing experience, we bring
                            unparalled technical expertise and proven management practices to deliver the best results. 
                        </p>
                        </div>
    {/* <div className="col text-center py-2 mx-auto">

<h3 className="font-weight-bold text-uppercase text-center">{header}</h3>
<h4 className="text-uppercase text-center">{details}</h4>

</div>
<div className="col text-center py-2 mx-auto">

<h3 className="font-weight-bold text-uppercase text-center">{header}</h3>
<h4 className="text-uppercase text-center">{details}</h4>

</div> */}


</div>

</div>

    )

}