import React from 'react'
import './../styles/Home.css'
function Home() {
  return (
    <div className='home'>
      <div className="left">
        Hi, I'm <span className="name">Prakhar Pande</span>
      </div>

      <div className="right">
        <div className="my-photo">
          <img src="https://avatars.githubusercontent.com/u/65051362?v=4" alt="Prakhar Pande" />
        </div>
      </div>
    </div>
  )
}

export default Home