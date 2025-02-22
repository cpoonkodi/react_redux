import React from 'react'
import { useSelector } from 'react-redux'

import { AppState } from '../types'

export default function Country() {
  const country = useSelector(
    (state: AppState) => state.countriesData.countries
  )

  return (
    <div>
      {country.map((i) => (
        <div>{i.capital}</div>
      ))}
    </div>
  )
}
