import {createReducer} from '@reduxjs/toolkit'
import { updateCategoryLoading } from './actions'

export interface ApplicationState {
  cateLoading: boolean
}

const initialState: ApplicationState = {
  cateLoading: true,
}

export default createReducer(initialState, (builder) =>
    builder
      .addCase(updateCategoryLoading, (state, action) => {
        const {cateLoading} = action.payload
        state.cateLoading = cateLoading
      })
)
