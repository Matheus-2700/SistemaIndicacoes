import {
  env
} from "./chunk-XHDNILFZ.mjs";

// src/redis/client.ts
import { Redis } from "ioredis";
var redis = new Redis(env.REDIS_URL);

export {
  redis
};
