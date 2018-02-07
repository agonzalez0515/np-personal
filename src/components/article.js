import React from "react"
import Link from "gatsby-link"
import '../style.scss'

const Article = props => 
    // <div css={{border: `1px red dashed`}}>
        <div css={{
            margin: `5px`,
            paddingTop: `5px`,
            flex: `0 0 calc(33.33% - 20px)`,
            overflow: `auto`,
            '@media (max-width:415px)': {
                flex: `0 1 auto`,
                }
        }}>
            <a className="hoverEffect" href={props.link} 
                css={{
                    margin: `auto`
                }} >
                <img src={props.linkToImage} />     
            </a>
            <h3 className="article-title"
                    css={{
                        textAlign: `center`,
                        fontWeight: `200`,
                        fontSize: `1.2em`, 
                        marginTop: `5px`,
                        width: `90%`                   
                    }}>
                    {props.title}
            </h3>
        </div>
       
    // </div>

export default Article

