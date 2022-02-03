import express from "express";
import morgan from "morgan";
import cors from "cors";
import usersRoutes from "../routes/users.js";

export class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.usersPath = "/api/users";

    // middlewares
    this.middlewares();

    //routes
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.static("public"));
    this.app.use(morgan("dev"));
    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.usersPath, usersRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("server running ", this.port);
    });
  }
}
