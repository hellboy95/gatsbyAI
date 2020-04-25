import React from 'react'

const ContactMap = () => {
    return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-sm-3 mx-auto text-center py-4">
                        <h2 className="font-weight-bolder">Our Co-ordinates :</h2>
                    </div>
                    <div className="col">
                        <div className="video-container">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1945.27001016424!2d80.080755!3d12.808342!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x42e572dff79d515d!2sAvinash%20Industries%20-%20Factory!5e0!3m2!1sen!2sin!4v1587469301554!5m2!1sen!2sin" width="600" height="400"></iframe>
                        </div>
                    </div>
                </div>
            </div>
    )
}


export default ContactMap