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
            backgroundColor: `#e47857`,
            flex: `1 100%`,
            height: `12vh`

        }}>
            <ul css={{display: `inline-block`, listStyle: `none`, textAlign: `center`, margin: `0 auto`}} >
               <li css={{display: `inline-block`, paddingLeft: `15px`}}>
                <FontAwesomeIcon icon={faTwitter} size="3x" />
                </li>
               <li css={{display: `inline-block`, textAlign: `center`, paddingRight: `15px`}}>
                <FontAwesomeIcon icon={faInstagram} size="3x" />
                </li>
               <li css={{display: `inline-block`, paddingRight:`15px`, textAlign: `center`}}>
                <FontAwesomeIcon icon={faEnvelope} size="3x" />
                </li>
            </ul>
        </div>
    </div>
       
    
export default Footer

