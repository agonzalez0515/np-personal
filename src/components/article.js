import React from "react"
import '../style.scss'

const Article = props => 
  <div className="article-item">
    <div className="hoverEffect">
      <a href={props.link}> 
        <figure>
          <img src={props.linkToImage} 
              css={{
                  width: `100%`,
                  margin: `0`,
                  boxShadow: `0 10px 30px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)`
              }} />
              <figcaption> {props.caption} </figcaption>     
        </figure>
      </a>
    </div>
    <div css={{margin:`auto`}}> 
      <p className="article-title"
          css={{
              textAlign: `center`,
              width: `90%`,
              paddingTop: `2%`,
              marginLeft: `auto`,
              marginRight: `auto`                   
          }}>
          <a css={{color: `black`}} href={props.link}> {props.title} </a>
      </p>
    </div>
  </div>
       

export default Article

