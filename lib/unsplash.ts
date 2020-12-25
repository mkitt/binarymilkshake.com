/**
 * Grab the daily image of a subject from Unsplash
 *
 * @see https://source.unsplash.com
 *
 * @example unsplash.daily('moose')
 */
const daily = (subject = '') => `https://source.unsplash.com/daily?${subject}`

/**
 * Grab a random image of a subject from Unsplash
 *
 * @see https://source.unsplash.com
 *
 * @example unsplash.random('human')
 */
const random = (subject = '') => `https://source.unsplash.com/random?${subject}`

const unsplash = Object.freeze({ daily, random })

export default unsplash
