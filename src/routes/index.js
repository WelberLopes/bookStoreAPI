import express from "express";
import books from "./bookRoutes.js";
import authors from "./authorRoutes.js";
import path from "path";


const routes = (app) => {

  app.use(express.static(path.join(path.resolve(), 'public')));

  app.route("/").get((req, res) => res.sendFile(path.join(path.resolve(), 'public', 'index.html')));

  app.use(express.json(), books, authors);
};

export default routes;