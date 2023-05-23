import React from 'react'
import './Card.css'
import { useState } from 'react'
import Player from './Player'
import { DefaultPlayer as Video } from 'react-html5video/dist';
import 'react-html5video/dist/styles.css';

function Card(props) {
  const [buttonPopup, setButtonPopup] = useState(false)

  let { title, description, thumbnail, profileImage, creatorName, videoLink } = props;

  return (
    <div className='card'>

      <div className='thumbnail-div'>
        <img className='thumbnail-image' src={thumbnail} alt='Thumbnail' />
        <div className='button-overlay'>
          <button className='play-btn' onClick={() => setButtonPopup(true)}><i class="fa-regular fa-circle-play fa-2xl"></i></button>
        </div>
      </div>

      <div className='card-content'>
        <div className='profile-div'>
          <img className='profile-image' src={profileImage} alt="creator-profile" />
        </div>
        <div className='information'>
          <h2 className='video-title'>{title}</h2>
          <p className='creator-name'>{creatorName}</p>
        </div>
      </div>


      <Player trigger={buttonPopup} setTrigger={setButtonPopup}>
        <div className='video-player'>
          <Video autoPlay loop>
            <source className='video-player' src={videoLink} type='video/webm' />
          </Video>
        </div>
        <h2 className='video-title player-video-title'>{title}</h2>
        <p className='video-desc'>{description}</p>
      </Player>

    </div>
  )
}

export default Card