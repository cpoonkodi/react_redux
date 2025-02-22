import React, { useEffect } from 'react'
import { Action } from 'redux'
import { useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'

import { AppState, CountriesState } from '../types'
import { getCountries } from '../redux/actions'

export default function Home() {
  const dispatch = useDispatch()

  const { countries, loading, error } = useSelector(
    (state: AppState) => state.countriesData
  )

  useEffect(() => {
    if (!loading) {
      ;(dispatch as ThunkDispatch<CountriesState, void, Action>)(getCountries())
    }
  }, [dispatch, loading])

  return (
    <>
      {error && <p>{error}</p>}
      {loading && <p>Loading...</p>}
      <div>
        {countries.map((i) => (
          <h1>{i.capital}</h1>
        ))}
      </div>
    </>
  )
}
