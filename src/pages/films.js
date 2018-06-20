import React from 'react'
import '../style.scss'

const Films = () => (
  <div>
    <main css={{display: `grid`,
                gridTemplateColumns: `1fr`,
                justifyItems: `center`}}>
      <div css={{padding: `56.25% 0 0 0`,
                position:`relative`,
                width: `80%`
               }}>
        <iframe src="https://player.vimeo.com/video/14811397" 
                css={{position: `absolute`,
                      top: `0`,
                      left: `0`,
                      width: `100%`,
                      height: `100%`,
                      border: `none`}} 
                frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen>
        </iframe>
      </div>
      <script src="https://player.vimeo.com/api/player.js"></script>
      <p className="film-title"><a href="https://vimeo.com/14811397">Canary Suicides - Short Film - 2011</a> from <a href="https://vimeo.com/valerianzamel">Valerian Zamel</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
    </main>
  </div>
)

export default Films