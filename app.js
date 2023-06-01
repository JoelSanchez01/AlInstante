import express from "express";
import morgan from "morgan";
import cors from "cors";
import indexRoutes from "./routes/index.routes.js";
import usersRoutes from "./routes/user.routes.js";
import noticiasRoutes from "./routes/noticias.routes.js";
import bodyParser from "body-parser";
const app = express();

app.use(cors());

app.use(morgan("dev"));
app.use(express.json());

app.use(indexRoutes);
app.use(usersRoutes);
app.use(noticiasRoutes);

app.use(bodyParser.json());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

export default app;
