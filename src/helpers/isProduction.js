/*
* This helper function returns a flag stating the current environment.
* If an environment variable is found with NODE_ENV set to true,
* then it is a prod environment. Otherwise, dev.
 */
export const isProduction = () => {
  return process.env.NODE_ENV === "production"
}
