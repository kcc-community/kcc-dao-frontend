import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import application from './application/reducer'

type ModuleTypes = 'application'

type MergedState = {
  [key in ModuleTypes]: {
    [key: string]: any
  }
}

const store = configureStore({
  reducer: {
    application
  },
})

export default store

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<any>()
