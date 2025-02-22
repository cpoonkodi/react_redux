import {
  CountriesActions,
  CountriesState,
  FETCH_COUNTRIES_FAILURE,
  FETCH_COUNTRIES_REQUEST,
  FETCH_COUNTRIES_SUCCESS,
} from '../../types'

const initialState: CountriesState = {
  countries: [],
  loading: false,
  error: '',
}

export function countriesReducer(
  state = initialState,
  action: CountriesActions
) {
  switch (action.type) {
  case FETCH_COUNTRIES_REQUEST:
    return {
      ...state,
      loading: true,
    }
  case FETCH_COUNTRIES_SUCCESS:
    return {
      ...state,
      countries: action.payload,
      loading: false,
    }
  case FETCH_COUNTRIES_FAILURE:
    return {
      ...state,
      loading: false,
      error: action.payload.msg,
    }
  default:
    return state
  }
}
