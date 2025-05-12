import axios from "axios";

// * for online axios fetch for rawg api

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "94fd847ad89c40dfb437ded6512dc27d",
  },
});

// ? For offline usage using json-server as a REST api on port 3333
// *{npx json-server --watch -p 3333 db.json}

// export default axios.create({
//   baseURL: "http://localhost:3333",
// });
