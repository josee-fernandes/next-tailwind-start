// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { HTTP_STATUS_CODE } from '@constants/httpStatusCode'

type TData = {
  name: string
}

export default function handler(request: NextApiRequest, response: NextApiResponse<TData>): void {
  response.status(HTTP_STATUS_CODE.SUCCESS).json({ name: 'John Doe' })
}
