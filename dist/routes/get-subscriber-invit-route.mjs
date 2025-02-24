import {
  getSubscriberInviteClicks
} from "../chunk-WXHI5377.mjs";
import "../chunk-XD7SWHLD.mjs";
import "../chunk-XHDNILFZ.mjs";

// src/routes/get-subscriber-invit-route.ts
import { z } from "zod";
var getSubscriberInviteClicksRoute = async (app) => {
  app.get(
    "/subscribers/:subscriberId/ranking/clicks",
    {
      schema: {
        summary: "Get subscriber invite clicks count",
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
      const { count } = await getSubscriberInviteClicks({ subscriberId });
      return { count };
    }
  );
};
export {
  getSubscriberInviteClicksRoute
};
