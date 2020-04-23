import React from 'react'
import {
    MdEmail, MdPhone
} from 'react-icons/md'

export default function ContactIcons({ title }) {
    return (
        <div className="container-fluid mt-4">
            <div className="row">
                <div className="col-auto mx-auto">
                    <MdEmail size={32} className = "ani"></MdEmail>
                    <MdPhone size={32} className = "ani"></MdPhone>
                </div>

            </div>
        </div>
    )
}
