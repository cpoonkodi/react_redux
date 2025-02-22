import axios from 'axios'
import { Action } from 'redux'
import { ThunkDispatch } from 'redux-thunk'

import {
  FETCH_COUNTRIES_FAILURE,
  FETCH_COUNTRIES_REQUEST,
  FETCH_COUNTRIES_SUCCESS,
  CountriesPropType,
  FetchCountriesSuccessAction,
  FetchCountriesRequestAction,
  FetchCountriesFailureAction,
  CountriesState,
} from '../../types'

export function fetchCountriesRequest(): FetchCountriesRequestAction {
  return {
    type: FETCH_COUNTRIES_REQUEST,
  }
}

export function fetchCountriesSuccess(
  payload: CountriesPropType
): FetchCountriesSuccessAction {
  return {
    type: FETCH_COUNTRIES_SUCCESS,
    payload,
  }
}

export function fetchCountriesFailure(
  msg: string
): FetchCountriesFailureAction {
  return {
    type: FETCH_COUNTRIES_FAILURE,
    payload: {
      msg,
    },
  }
}

export function getCountries() {
  return async function (
    dispatch: ThunkDispatch<CountriesState, void, Action>
  ) {
    dispatch(fetchCountriesRequest())
    try {
      const response = await axios.get('https://restcountries.com/v3.1/all')
      const countriesData = response.data.map((obj: any) => ({
        ...obj,
      }))
      dispatch(fetchCountriesSuccess(countriesData))
    } catch (error: any) {
      if (error.response.status === 404) {
        dispatch(fetchCountriesFailure('Page is not found'))
        return
      }
      dispatch(fetchCountriesFailure('Something wrong'))
    }
  }
}
