import React from "react"
import '../style.scss'

const Article = props => 
  <div className="article-item">
    <a href={props.link}> 
      <figure css={{marginBottom: `.1rem`}}>
        <img src={props.linkToImage} alt={props.description} />
            <figcaption> {props.caption} </figcaption>     
      </figure>
    </a>
    <div className="article-title-container">
      <p className="article-title">
        <a href={props.link}> {props.title} </a>
      </p>
    </div>
  </div>
       
export default Article

