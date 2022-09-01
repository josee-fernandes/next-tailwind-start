const successStatusCode = 200
const successCacheStatusCode = 304
const unauthorizedStatusCode = 401
const forbiddenStatusCode = 403
const notFoundStatusCode = 404
const unknownStatusCode = 500

export enum HTTP_STATUS_CODE {
  SUCCESS = successStatusCode,
  SUCCESS_CACHE = successCacheStatusCode,
  UNAUTHORIZED = unauthorizedStatusCode,
  FORBIDDEN = forbiddenStatusCode,
  NOT_FOUND = notFoundStatusCode,
  UNKNOWN = unknownStatusCode
}
