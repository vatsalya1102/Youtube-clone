import Card from './Card'
import './Home.css'
import React, { useState } from 'react'
import Spinner from './Spinner/Spinner'
import { useEffect } from 'react'
import ReactPaginate from 'react-paginate'

function Components(props) {
  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)

  const updateVideos = async () => {
    props.setProgress(10);
    const url = `https://internship-service.onrender.com/videos?page=${page}`;
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json()
    props.setProgress(70);
    setVideos(parsedData.data.posts)
    setLoading(false)
    props.setProgress(100)
  }

  useEffect(() => {
    updateVideos();
    // eslint-disable-next-line
  }, [])

  const handlePageChange = (data) => {
    setPage(data.selected+1)
  }

  return (
    <div className='home-div'>
      {loading && <Spinner />}
      {videos.map((video) => {
        return (
          <Card key={video.postId} title={video.submission.title} description={video.submission.description} thumbnail={video.submission.thumbnail} videoLink={video.submission.mediaUrl} creatorName={video.creator.name} profileImage={video.creator.pic} />
        )
      })}

      {/* <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        pageCount={9}
        onPageChange={handlePageChange}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        
        containerClassName='pagination'
        pageClassName='page-item'
        pageLinkClassName='page-link'
        previousClassName='page-item'
        previousLinkClassName='page-link'
        nextClassName='page-item'
        nextLinkClassName='page-link'
        breakClassName='page-item'
        breakLinkClassName='page-link'
        activeClassName='active' /> */}
    </div>
  )
}

export default Components