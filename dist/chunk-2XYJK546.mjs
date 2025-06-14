import {
  GetSubscriberRankingPosition
} from "./chunk-DEAKPFMQ.mjs";

// src/routes/get-subscriber-rank-positions-route.ts
import { z } from "zod";
var getSubscriberRankingPositionRoute = async (app) => {
  app.get(
    "/subscribers/:subscriberId/ranking/position",
    {
      schema: {
        summary: "Get subscriber ranking position",
        tags: ["referral"],
        params: z.object({
          subscriberId: z.string()
        }),
        response: {
          200: z.object({
            position: z.number().nullable()
          })
        }
      }
    },
    async (request) => {
      const { subscriberId } = request.params;
      const { position } = await GetSubscriberRankingPosition({
        subscriberId
      });
      return { position };
    }
  );
};

export {
  getSubscriberRankingPositionRoute
};
