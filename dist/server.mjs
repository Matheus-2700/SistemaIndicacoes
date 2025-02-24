import {
  accessInviteLinkRoute
} from "./chunk-ZNS6WXRD.mjs";
import {
  getRankingRoute
} from "./chunk-ORHXJ3UQ.mjs";
import {
  getSubscriberInvitesCountRoute
} from "./chunk-OAOGPJVP.mjs";
import {
  getSubscriberRankingPositionRoute
} from "./chunk-2XYJK546.mjs";
import {
  subscribeToEventRoute
} from "./chunk-VKQQGIHV.mjs";
import "./chunk-NACSHRZ4.mjs";
import "./chunk-W4QOA6AZ.mjs";
import "./chunk-ZODXDK2O.mjs";
import "./chunk-AN4FP3FK.mjs";
import "./chunk-5OAAD53O.mjs";
import "./chunk-NCMKLBVT.mjs";
import "./chunk-DEAKPFMQ.mjs";
import "./chunk-XD7SWHLD.mjs";
import "./chunk-XHDNILFZ.mjs";

// src/server.ts
import { fastify } from "fastify";
import { fastifyCors } from "@fastify/cors";
import "dotenv/config";
import {
  validatorCompiler,
  serializerCompiler,
  jsonSchemaTransform
} from "fastify-type-provider-zod";
import { fastifySwagger } from "@fastify/swagger";
import { fastifySwaggerUi } from "@fastify/swagger-ui";
var app = fastify().withTypeProvider();
app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);
app.register(fastifyCors);
app.register(fastifySwagger, {
  openapi: {
    info: {
      title: "NLW COnnect",
      version: "0.0.1"
    }
  },
  transform: jsonSchemaTransform
});
app.register(fastifySwaggerUi, {
  routePrefix: "/docs"
});
app.register(subscribeToEventRoute);
app.register(accessInviteLinkRoute);
app.register(getSubscriberInvitesCountRoute);
app.register(getSubscriberRankingPositionRoute);
app.register(getRankingRoute);
app.listen({ port: 3333, host: "127.0.0.1" }).then(() => {
  console.log("\u{1F680} HTTP server running on http://127.0.0.1:3333");
});
