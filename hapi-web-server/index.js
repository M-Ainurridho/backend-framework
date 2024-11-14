const Hapi = require("@hapi/hapi");

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: "localhost",
  });

  await server.start();
  console.log(server.info);
  console.log(`Server is listening at ${server.info.uri}`);
};

init();
