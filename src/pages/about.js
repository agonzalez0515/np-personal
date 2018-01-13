import React from 'react'
import Link from 'gatsby-link'
import profile from '../assets/profile.jpg'
import '../style.scss'

const About = () => (
  <div className= "cont" css={{
    display: `flex`,
    flexFlow: `row wrap`,
    justifyContent: `space-around`,
    alignItems: `center`,
    marginTop: `50px`
  }} >
    <div css={{
        flexShrink:`0`,
        padding: `5px`,
        width: `30%`
    }}>
      <img src={profile} alt="picture of Natalia Provatas" css={{maxWidth: `100%`}} />
    </div>

    <div css={{
      flexShrink:`0`
    }}>
      <h2 className="author"> About the</h2>
      <h2 className="author"> Author </h2>
      <p className="bio" css={{overflow: `auto`, width: `600px`, margin: `20px`, padding: `5px`}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a sapien molestie, dictum leo ac, bibendum ante. Morbi gravida dui libero, id consequat justo varius quis. Donec non vestibulum risus. Maecenas eu arcu urna. Nunc fringilla ac lectus in luctus. Phasellus hendrerit nisi velit. Cras aliquet ullamcorper fermentum. Nulla id dignissim lectus. Ut dapibus molestie consequat. <br />Donec pharetra dignissim velit, at accumsan leo rutrum quis. Donec et dignissim risus, vel tincidunt nunc. Sed est ipsum, dictum a odio a, commodo malesuada est. Etiam tempor fringilla mauris, non vehicula eros. Pellentesque auctor nunc in tincidunt elementum. In ut felis nec nulla sagittis vulputate ac nec leo.
        <p>Nunc nec porta odio, eu ultrices libero. Donec neque nunc, fermentum sit amet luctus eu, pellentesque quis orci. Fusce quis ligula eget purus condimentum consectetur. Morbi id nisi ac arcu pretium pellentesque ac eu felis. Integer sit amet sapien ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus eu posuere tortor. Aliquam vitae diam eu massa tristique finibus ut eu lorem. Aliquam erat volutpat. Quisque finibus a dui sit amet tristique. Aliquam et erat ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc elementum tristique augue quis facilisis. Maecenas laoreet interdum interdum. Cras at porta nunc. </p>
      </p>
    </div>
  
  </div>
)

export default About
