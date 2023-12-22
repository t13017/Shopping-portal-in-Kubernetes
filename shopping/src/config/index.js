const dotEnv = require("dotenv");

if (process.env.NODE_ENV !== "prod") {
  const configFile = `./.env.${process.env.NODE_ENV}`;
  dotEnv.config({ path: configFile });
} else {
  dotEnv.config();
}

module.exports = {
  PORT: 8003,
  DB_URL: "mongodb://localhost:27017/shopping",
  APP_SECRET: 'secret',
  BASE_URL: "http://localhost:8003/",
  EXCHANGE_NAME: "ONLINE_SHOPPING",
  MSG_QUEUE_URL: "amqp://rabbitmq:5672",
  CUSTOMER_SERVICE: "customer_service",
  SHOPPING_SERVICE: "shopping_service",
};
