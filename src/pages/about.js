import React from "react";
import large from "../assets/large.jpg";
import medium from "../assets/medium.jpg";
import small from "../assets/small.jpg";
import "../style.scss";

const About = (props) => (
  <div className="bio-container">
    <section className="bio">
      <p>
        Writer/Director Natalia Provatas is a first generation Los Angeles
        native of Puerto Greekan descent. Growing up, Natalia was drawn to
        writing as a way to share her journey of trying to fit into the world at
        large as a mixed-race American.{" "}
      </p>
      <aside>
        <img
          className="profile-pic"
          srcSet={`${small} 402w, ${medium} 870w, ${large} 1284w`}
          src={small}
          alt="picture of Natalia Provatas"
        />
      </aside>
      <p>
        She is a published personal essayist, and her work often reflects how
        she grew up: looking at the funny-side of dark stuff. Her personal essay
        <a href="http://www.refinery29.com/2017/02/139706/bulletproof-biohacking-conference-2016">
          "What It’s Really Like Inside the Elite Conference for Health Bros”{" "}
        </a>for Refinery 29 was voted one of Apple News’ “Weekly Must Reads.”
        Additional published work can be found in{" "}
        <a href="https://www.realsimple.com/home-organizing/decorating/how-to-shop-flea-market">
          Real Simple
        </a>{" "}
        Magazine,{" "}
        <a href="https://www.damemagazine.com/2014/09/22/my-vagina-and-me-love-story/">
          Dame Magazine
        </a>, and Wework’s{" "}
        <a href="https://www.wework.com/creator/personal-profiles/on-being-a-tomboy/?utm_source=wework&utm_medium=referral&utm_campaign=creator">
          Creator Magazine
        </a>. She is project manager for{" "}
        <a href="http://ontheinsideart.com/">On the Inside</a>, the largest art
        collection of currently incarcerated LGBTQ+ prisoners that opened at
        Abron's Art Center in NYC in 2016 and at The Craft Contemporary Museum
        in Los Angeles in 2019.
      </p>
      <p>
        Natalia co-directed/co-wrote the dark comedy short film{" "}
        <a href="https://vimeo.com/14811397">Canary Suicides</a>, which won the
        "Audience Award" at Holly Shorts, and was an official selection at both
        SXSW and Cleveland International Film Festival. Previously, Natalia was
        on the writing team of <em>BOO: Earth Division</em> for DreamWorks
        Animation Television. In 2018, she was selected as 1 of 10 fellows for
        the National Hispanic Media Coalition’s (NHMC){" "}
        <em>Series Script Writer’s Program</em>. She is a{" "}
        <em>Woman’s Center for Creative Work</em> 2020 Grant Recipient. A fellow
        in the <em>2020 Disruptor’s Fellowship</em> facilitated by Joey
        Solloway’s 5050by2020 and The Center of Cultural Power. She also writes
        about sexuality, the body, female identity, and surviving breast cancer
        from a multicultural lens. She is currently working on her memoir,
        <em>Ghosting My Death Doula</em>, a series of funny personal essays
        about having cancer in your thirties.
      </p>
      <p>
        She currently lives In Eagle Rock with her dog Norman, both dance for
        treats.
      </p>
    </section>
  </div>
);

export default About;
