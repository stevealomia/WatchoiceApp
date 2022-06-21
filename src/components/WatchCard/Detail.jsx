import React from 'react'

export default function Details({ list }) {
  const details = Object.keys(list).filter(key => list[key])
  return (
    <ul>
      {details.map(key => {
        return (
          <li>
            <span>{key}</span>&nbsp;
            <strong>{list[key]}</strong>
          </li>
        )
      })}
    </ul>
  )
}
