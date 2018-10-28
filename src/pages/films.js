import React from 'react'
import '../style.scss'

const Films = () =>
  <div>
    <main>
    <div>
        <h2 className="film-title"><a href="https://vimeo.com/282766089">Lazy Actress: A Web Series</a></h2>
        <div className="video-container">
          <iframe className= "video" src="https://player.vimeo.com/video/282766089"></iframe>
        </div>
      </div>
      <div>
        <h2 className="film-title"><a href="https://vimeo.com/14811397">Canary Suicides</a></h2>
        <div className="video-container">
          <iframe className= "video" src="https://player.vimeo.com/video/14811397"></iframe>
        </div>
      </div>
    </main>
  </div>


export default Films