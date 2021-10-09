import { useSelector } from 'react-redux'
import { AppState } from '../index'

export function useProjectLoading(): boolean {
  return useSelector((state: AppState) => {
    return state.application.cateLoading
  }) 
}

