const routes = [
  {
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return h.response("Homepage");
    },
  },
  {
    method: "*",
    path: "/",
    handler: (request, h) => {
      return "Halaman tidak dapat diakses dengan method tersebut";
    },
  },
  {
    method: "GET",
    path: "/about",
    handler: (request, h) => {
      return "About Page";
    },
  },
  {
    method: "*",
    path: "/about",
    handler: (request, h) => {
      return "Halaman tidak dapat diakses dengan method tersebut";
    },
  },
  {
    method: "GET",
    path: "/hello/{name?}",
    handler: (request, h) => {
      const { username = "stranger" } = request.params;
      return `Hello, ${username}`;
    },
  },
  {
    method: "GET",
    path: "/queries",
    handler: (request, h) => {
      const { name, location } = request.query;
      return `Hello, ${name} from ${location}`;
    },
  },
  {
    method: "POST",
    path: "/login",
    handler: (request, h) => {
      const { username, password } = request.payload;
      return `Hello, ${username} and ${password}`;
    },
  },
  {
    method: "*",
    path: "/{any*}",
    handler: (request, h) => {
      return "Halaman tidak ditemukan";
    },
  },
];

module.exports = routes;
