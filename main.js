import Koa from "koa";
import logger from "koa-logger";
import bodyParser from "koa-bodyparser";
import cors from "@koa/cors";

import config from "./config/app";
import router from './routes/index';

const app = new Koa();

app.use(logger());
app.use(cors());
app.use(bodyParser());

router.get("/", async (ctx) => {
    ctx.body = {
        status: "ok",
    };
});

app.use(router.allowedMethods());
app.use(router.routes());

app.listen(config.port, () =>
    console.log(`server running on port ${config.port}`)
);
