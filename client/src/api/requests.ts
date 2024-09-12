import { AxiosError } from 'axios'
import Axios from './axios'
import { ShortLinkRes } from './types'

export const cerateShortLink = async (url: string) => {
  try {
    const res = await Axios.post<ShortLinkRes | { error: string }>('http://localhost:8080/url', {
      url,
    })

    if (res.status) {
      throw (res.data as unknown as AxiosError)?.message
    }
    return res.data
  } catch (error) {
    console.error('Failed to create shortLink: ', error)
    return {
      error: `${error}. Please try another link`,
    }
  }
}
