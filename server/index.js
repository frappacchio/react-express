import path from "path";
import fs from "fs";
import axios from "axios";
import React from "react";
import express from "express";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "../src/App";

const PORT = process.env.PORT || 3006;
const app = express();
app.get("[a-zA-Z0-9/]+", async (req, res) => {
  const data = await axios
    .get("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.data);

  const app = ReactDOMServer.renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );

  const indexFile = path.resolve("./build/index.html");
  fs.readFile(indexFile, "utf8", (err, data) => {
    if (err) {
      console.error("Something went wrong:", err);
      return res.status(500).send("Oops, better luck next time!");
    }
    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    );
  });
});

app.use(express.static("./build/"));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
