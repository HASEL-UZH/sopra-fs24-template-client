import { isProduction } from 'helpers/isProduction'

/**
 * This helper function returns the current domain of the API.
 * If the environment is production, the production App Engine URL will be returned.
 * Otherwise, the link localhost:8080 will be returned (Spring server default port).
 * @returns {string}
 */
export const getDomain = () => {
  const prodUrl = 'https://my-server-url.oa.r.appspot.com/' // TODO: insert your prod url for server (once deployed)
  const devUrl = 'http://localhost:8080'

  return isProduction() ? prodUrl : devUrl
}
