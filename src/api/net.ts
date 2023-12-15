import { get, post } from './axios'

export function getHomePriceInfo(){
  return get('https://market.kcc.network/api/v1/prices')
}

export function postSnapShot(data): Object{
  return post('https://hub.snapshot.org/graphql', data)
}