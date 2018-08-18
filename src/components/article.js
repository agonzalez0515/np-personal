import React from "react"
import '../style.scss'

const Article = props => 
  <div className="article-item">
    <a href={props.link}> 
      <figure css={{marginBottom: `.1rem`}}>
        <img src={props.linkToImage}
             alt={props.description}
            css={{
                width: `100%`,
                margin: `0`,
                boxShadow: `0 10px 30px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)`
            }} />
            <figcaption> {props.caption} </figcaption>     
      </figure>
    </a>
   
    <div css={{margin:`auto`}}>
      <p className="article-title"
          css={{
              textAlign: `center`,
              width: `90%`,
              paddingTop: `2%`,
              marginLeft: `auto`,
              marginRight: `auto`                   
          }}>
          <a css={{color: `black`, fontSize: `1.1rem`}} href={props.link}> {props.title} </a>
      </p>
    </div>
  </div>
       

export default Article

