import React from "react"
import Link from "gatsby-link"
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {faTwitter, faInstagram} from '@fortawesome/fontawesome-free-brands'
import {faEnvelope} from '@fortawesome/fontawesome-free-solid'


const Footer = props => 
    
    <div css={{
        display: `flex`,
        flexFlow: `row wrap`,
        alignItems: `center`
    }}>
        <div css={{
            textAlign: `right`,
            backgroundColor: `#B4E1FF`,
            flex: `1 100%`,
            height: `10vh`

        }}>
            <ul css={{
                display: `inline-block`, 
                listStyle: `none`, 
                margin: `auto`,
                width: `80%`
            }} >
                <li css={{display: `inline-block`, padding: `1.6rem`}}>
                    <a href="https://twitter.com/nataliaprovatas"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
                </li>
                <li css={{display: `inline-block`, padding: `1.6rem`}}>
                    <a href="https://www.instagram.com/chola4hire/"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
                </li>
                <li css={{display: `inline-block`, padding: `1.6rem`}}>
                    <a href="mailto:someone@example.com" target="_top"><FontAwesomeIcon icon={faEnvelope} size="2x" /></a>
                </li>
            </ul>
        </div>
    </div>
       
    
export default Footer

