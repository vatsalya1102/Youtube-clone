import React from 'react'
import './Card.css'
import { useState } from 'react'
import Player from './Player'
import ReactPlayer from 'react-player'

function Card(props) {
  const [buttonPopup, setButtonPopup] = useState(false)

  let { title, description, thumbnail, profileImage, creatorName, videoLink } = props;

  return (
    <div className='card'>

      <div className='thumbnail-div'>
        <img className='thumbnail-image' src={thumbnail} alt='Thumbnail' />
        <div className='button-overlay'>
          <button className='play-btn' onClick={() => setButtonPopup(true)}><i className="fa-regular fa-circle-play fa-2xl"></i></button>
        </div>
      </div>

      <div className='card-content'>
        <div onClick={() => setButtonPopup(true)} className='profile-div'>
          <img className='profile-image' src={profileImage} alt="creator-profile" />
        </div>
        <div className='information'>
          <h2 className='video-title'>{title}</h2>
          <p className='creator-name'>{creatorName}</p>
        </div>
      </div>

      <Player trigger={buttonPopup} setTrigger={setButtonPopup}>
        <div className='video-player'>
          <ReactPlayer width='100%' height='400px' controls url={videoLink} playing={true} />
        </div>
        <h2 className='video-title player-video-title'>{`${title} by ${creatorName}`}</h2>
        <p className='video-desc'>{description}</p>
      </Player>

    </div>
  )
}

export default Card