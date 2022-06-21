import React, { useState, useEffect } from 'react'
import WatchCard from '../../components/WatchCard'
import { favoriteWatchesService } from '../../services'

export default function FavoritesScreen() {
  const [watches, setWatches] = useState([])

  useEffect(() => {
    async function fetchWatches() {
      const res = await favoriteWatchesService()
      setWatches(res.data)
    }

    fetchWatches()
  }, [])

  return (
    <div>
      <div className='row row-cols-1 row-cols-md-4 g-4'>
        {
          watches.map(watch => {
            return (
              <div className='col'>
                <WatchCard {...watch} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}