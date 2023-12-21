const dotEnv = require("dotenv");

if (process.env.NODE_ENV !== "prod") {
  const configFile = `./.env.${process.env.NODE_ENV}`;
  dotEnv.config({ path: configFile });
} else {
  dotEnv.config();
}

module.exports = {
  PORT: 8001,
  DB_URL: "mongodb://localhost:27017/customer",
  APP_SECRET: 'secret',
  EXCHANGE_NAME: 'ONLINE_STORE',
  MSG_QUEUE_URL: 'amqp://rabbitmq:5672',
  CUSTOMER_SERVICE: "customer_service",
  SHOPPING_SERVICE: "shopping_service",
};
