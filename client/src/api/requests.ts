import { AxiosError } from 'axios'
import Axios from './axios'
import { ShortLinkRes } from './types'

type ResponseError = {
  response?: {
    data: {
      message: string
    }
  }
}
export const cerateShortLink = async (url: string) => {
  try {
    const res = await Axios.post<ShortLinkRes | { error: string }>('http://localhost:8080/url', {
      url,
    })

    if (res.status !== 201) {
      throw new Error((res.data as unknown as AxiosError)?.message)
    }
    return res.data
  } catch (error) {
    const CastError = error as ResponseError
    const errorResponse = CastError?.response
    return {
      error: `${errorResponse?.data?.message || errorResponse?.data}. Please try another link`,
    }
  }
}
