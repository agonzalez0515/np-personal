import React from 'react'
import profile from '../assets/nataliaProvatas.jpg'
import '../style.scss'

const About = () =>
  <div className="bio-container">
    <section className="bio">
      <p>Writer and filmmaker, Natalia Provatas, is a first generation Los Angeles native of Puerto Rican and Greek descent. </p>
      <p>Last year, her personal essay <a href="http://www.refinery29.com/2017/02/139706/bulletproof-biohacking-conference-2016">"What It’s Really Like Inside the Elite Conference for Health Bros”</a> for Refinery 29 was voted one of Apple News’ “Weekly Must Reads.” Additional published work can be found on <a href="https://www.damemagazine.com/2014/09/22/my-vagina-and-me-love-story/">Dame Magazine</a>, <a href="https://www.wework.com/creator/personal-profiles/on-being-a-tomboy/?utm_source=wework&utm_medium=referral&utm_campaign=creator">Creator Magazine</a>, <a href="http://www.thegloss.com/author/natalia-provatas/">The Gloss</a>, and <a href="http://manifestjustice.org/blog/post/2">Manifest Justice</a>.  She was also project manager for <a href="http://ontheinsideart.com/">On the Inside</a>, the largest art collection of currently incarcerated LGBTQ prisoners that opened at Abron's Art Center in NYC last fall, and will be coming to The Craft and Folk Art Museum in Los Angeles summer of 2019.</p>
      <p>Natalia co-directed/co-wrote the dark comedy short film Canary Suicides, which won the "Audience Award" at Holly Shorts, and was an official selection at both SXSW and Cleveland International Film Festival. She also directed and co-wrote the comedy web series Lazy Actress. Previously, Natalia was a production and editorial coordinator for the DreamWorks Animation features, The Croods, Me and My Shadow and Monkeys of Mumbai, respectively. She also worked on the writing team of BOO: Earth Division for DreamWorks Animation Television.</p>
      <p>Growing up, Natalia was drawn to writing as a way to share her struggles about trying to fit into the world at large as a mixed-race American. She also writes about sex, the body, female identity, and surviving breast cancer from a multi-culture lens.</p>  
      <p>She currently resides in Silverlake with her fluffy dog, Norman. Both dance for treats.</p>
    </section>
    <aside>
      <img className="profile-pic" src={profile} alt="picture of Natalia Provatas" />
    </aside>
  </div>


export default About
