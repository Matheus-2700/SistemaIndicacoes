import {
  getRanking
} from "./chunk-ZODXDK2O.mjs";

// src/routes/get-ranking-route.ts
import { z } from "zod";
var getRankingRoute = async (app) => {
  app.get(
    "/ranking",
    {
      schema: {
        summary: "Get ranking",
        tags: ["referral"],
        response: {
          200: z.object({
            ranking: z.array(
              z.object({
                id: z.string(),
                name: z.string(),
                score: z.number()
              })
            )
          })
        }
      }
    },
    async (request) => {
      const { rankingWithScore } = await getRanking();
      return { ranking: rankingWithScore };
    }
  );
};

export {
  getRankingRoute
};
