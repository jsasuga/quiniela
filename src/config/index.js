/**
 * Main config file used throughout the application
 * @module config
 * @type {object}
 * @property {integer} port - The port to expose to application to.
 * @property {string} pgUrl - The url used by sequlize to connect to postgres.
 * @property {string} nodeEnv - The environment to run the server in
 * @property {string} sentry - Sentry DSN

 */
const config = {
    port: process.env.PORT || 9000,
    pgUrl: process.env.PG_URL || 'postgres://slbjjfksiqoglf:d1c84a62dac0ddf4023d3b027b2cb33ce0e3bbde9a585819e81647940b60d905@ec2-23-23-222-184.compute-1.amazonaws.com:5432/d2c8128e1b8gn9',
    nodeEnv: process.env.NODE_ENV || 'development',
    sentry: process.env.SENTRY_DSN || ''
};
export default config;
