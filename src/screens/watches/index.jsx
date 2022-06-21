import React, { useState, useEffect } from 'react'
import WatchCard from '../../components/WatchCard'
import { watchesService } from '../../services'

export default function WatchesScreen() {
  const [watches, setWatches] = useState([])

  useEffect(() => {
    async function fetchWatches() {
      const res = await watchesService()
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