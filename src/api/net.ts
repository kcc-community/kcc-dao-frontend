import { get, post } from './axios'

export function getHomePriceInfo(){
  return get('/api/v1/kcs/price')
}

export function postSnapShot(data): Object{
  return post('https://hub.snapshot.org/graphql', data)
}