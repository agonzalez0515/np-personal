import React from "react"
import Link from "gatsby-link"
import '../style.scss'

const Article = props => 
    // <div css={{border: `1px red dashed`}}>
        <div css={{
            // width:`30%`,
            height:`370px`,
            margin: `5px`,
            paddingTop: `5px`,
            flex: `0 0 30%`,
            overflow: `hidden`,
            alignSelf: `center`
        }}>
            <a className="hoverEffect" href={props.link}>
                <img src={props.linkToImage} 
                     css={{border: `4px babyblue solid`}} />
                     <h3 className="article-title"
                    css={{
                        textAlign: `center`,
                        fontWeight: `200`,
                        fontSize: `1.2em`, 
                        marginTop: `5px`                   
                    }}>
                    {props.title}
                </h3>
            </a>
        </div>
       
    // </div>

export default Article

