import React from "react"
import Link from "gatsby-link"
import '../style.scss'

const Article = props => 
        <div css={{
            margin: `10px`,
            paddingTop: `5px`,
            flex: `0 0 calc(33.33% - 20px)`,
            overflow: `auto`,
            '@media (max-width:415px)': {
                flex: `0 1 auto`,
                }
        }}>
            <div className="hoverEffect">
                <a href={props.link}> 
                    <img src={props.linkToImage} 
                        css={{
                            width: `100%`,
                            marginLeft: `auto`,
                            marginRight: `auto`,
                            boxShadow: `0 10px 30px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)`
                        }} />     
                </a>
            </div>
            <div css={{margin:`auto`}}> 
                <h3 className="article-title"
                    css={{
                        textAlign: `center`,
                        fontWeight: `200`,
                        fontSize: `1.35em`,
                        marginTop: `5px`,
                        width: `75%`,
                        marginLeft: `auto`,
                        marginRight: `auto`                   
                    }}>
                    <a css={{color: `black`}} href={props.link}> {props.title} </a>
                </h3>
            </div>
        </div>
       

export default Article

