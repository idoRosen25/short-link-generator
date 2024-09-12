import Axios from './axios'
import { ShortLinkRes } from './types'

export const cerateShortLink = async (url: string) => {
  try {
    const res = await Axios.post<ShortLinkRes>('http://localhost:8080/url', { url })
    return res.data
  } catch (error) {
    console.error('Failed to create shortLink: ', error)
    return null
  }
}
