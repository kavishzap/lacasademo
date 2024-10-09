'use client'
import React from "react"
import { TypeAnimation } from 'react-type-animation';

export default function TextAnimation(){
    return(
        <h4 className="heading fw-bold text-white title-dark mb-3">SI DAN TO LAKAZ ENA<br/>
        <TypeAnimation
            sequence={[
                'RESPE',
                1000, 
                'LAZWA',
                1000
            ]}
            wrapper="span"
            speed={5}
            repeat={Infinity}
            className="typewrite text-primary ms-2"
            cursor={false}
        /></h4>
    )
}