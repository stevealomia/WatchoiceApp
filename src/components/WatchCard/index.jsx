import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { favoriteWatchService } from '../../services'
import Details from './Detail'

const HearthFull = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
    </svg>
  )
}

const HeartEmpty = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
    </svg>
  )
}

function WatchCard(props) {
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()
  const [favorited, setFavorited] = useState(props.favorited)

  async function favorite() {
    if (user) {
      const { data } = await favoriteWatchService(props.id)
      setFavorited(data.favorited)
    } else {
      navigate('/login')
    }
  }

  return (
    <div className="card">
      <img src={props.image_url} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">
          <Details list={props.case} />
          <Details list={props.dial} />
          <Details list={props.movement} />
        </p>
        <button className='btn' onClick={favorite}>
          {
            favorited ? <HearthFull /> : <HeartEmpty />
          }
        </button>
      </div>
    </div>
  )
}

export default WatchCard