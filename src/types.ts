// Action types
export const FETCH_COUNTRIES_REQUEST = 'FETCH_COUNTRIES_REQUEST'
export const FETCH_COUNTRIES_SUCCESS = 'FETCH_COUNTRIES_SUCCESS'
export const FETCH_COUNTRIES_FAILURE = 'FETCH_COUNTRIES_FAILURE'

export type CountryType = {
  capital: string
  name: {
    common: string
  }
  flags: {
    svg: string
  }
  population: number
  area: number
  region: string
}

export type CountriesPropType = {
  countries: CountryType[]
}

// Actions
export type CountriesActions =
  | FetchCountriesRequestAction
  | FetchCountriesSuccessAction
  | FetchCountriesFailureAction

export type FetchCountriesRequestAction = {
  type: typeof FETCH_COUNTRIES_REQUEST
}

export type FetchCountriesSuccessAction = {
  type: typeof FETCH_COUNTRIES_SUCCESS
  payload: CountriesPropType
}

export type FetchCountriesFailureAction = {
  type: typeof FETCH_COUNTRIES_FAILURE
  payload: {
    msg: string
  }
}

// State
export type CountriesState = {
  countries: CountryType[]
  loading: boolean
  error: string
}

export type AppState = {
  countriesData: CountriesState
}
