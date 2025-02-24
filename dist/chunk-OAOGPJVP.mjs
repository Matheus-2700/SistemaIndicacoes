import {
  getSubscriberInvitesCount
} from "./chunk-NCMKLBVT.mjs";

// src/routes/get-subscriber-invites-count-route.ts
import { z } from "zod";
var getSubscriberInvitesCountRoute = async (app) => {
  app.get(
    "/subscribers/:subscriberId/ranking/count",
    {
      schema: {
        summary: "Get subscriber invites count",
        tags: ["referral"],
        params: z.object({
          subscriberId: z.string()
        }),
        response: {
          200: z.object({
            count: z.number()
          })
        }
      }
    },
    async (request) => {
      const { subscriberId } = request.params;
      const { count } = await getSubscriberInvitesCount({ subscriberId });
      return { count };
    }
  );
};

export {
  getSubscriberInvitesCountRoute
};
