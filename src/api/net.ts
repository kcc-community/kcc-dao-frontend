import { get, post } from './axios'

export function getDappList(data): Object{
  return get('/api/v1/explore', data)
}