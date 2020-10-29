const config = {
  DDBB: {
    NAME: process.env.DDBB_NAME,
    USER: process.env.DDBB_USER,
    PASS: process.env.DDBB_PASS,
    PORT: process.env.DDBB_PORT,
    HOST: process.env.DDBB_HOST,
  },
  JWT: {
    PRIVATE_KEY: process.env.JWT_PRIVATE_KEY,
    EXPIRES_TIME: process.env.JWT_EXPIRES_TIME,
  },
};

module.exports = config;
