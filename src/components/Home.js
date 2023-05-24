import Card from './Card'
import './Home.css'
import { useEffect, useState } from 'react'

function Components(props) {
  const [videos, setVideos] = useState([])
  const [page, setPage] = useState(1)

  const updateVideos = async () => {
    props.setProgress(10);
    const url = `https://internship-service.onrender.com/videos?page=${page}`;
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json()
    props.setProgress(70);
    setVideos(parsedData.data.posts)
    props.setProgress(100)
  }

  useEffect(() => {
    updateVideos();
    // eslint-disable-next-line
  }, [page])

  const goAhead = (() => {
    if (page !== 9)
      setPage(page + 1);
  })

  const goBack = (() => {
    if (page !== 1) {
      setPage(page - 1);
    }
  })

  const extremePage = ((value) => {
    setPage(value);
  })

  return (
    <div className='home-div'>
      <div className='header'>
        <button onClick={() => extremePage(1)}><i className="fa-solid fa-circle-chevron-left"></i></button>
        <button onClick={goBack}><i className="fa-solid fa-chevron-left"></i></button>
        <button onClick={goAhead}><i className="fa-solid fa-chevron-right"></i></button>
        <button onClick={() => extremePage(9)}><i className="fa-solid fa-circle-chevron-right"></i></button>
      </div>
      {videos.map((video) => {
        return (
          <Card key={video.postId} title={video.submission.title} description={video.submission.description} thumbnail={video.submission.thumbnail} videoLink={video.submission.mediaUrl} creatorName={video.creator.name} profileImage={video.creator.pic} />
        )
      })}
    </div>
  )
}

export default Components