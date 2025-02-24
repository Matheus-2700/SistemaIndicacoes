import {
  accessInviteLink
} from "./chunk-W4QOA6AZ.mjs";
import {
  env
} from "./chunk-XHDNILFZ.mjs";

// src/routes/access-invite-link-route.ts
import { z } from "zod";
var accessInviteLinkRoute = async (app) => {
  app.get(
    "/invites/:subscriberId",
    {
      schema: {
        summary: "Access invite link and redirects user",
        tags: ["referral"],
        params: z.object({
          subscriberId: z.string()
        }),
        response: {
          201: z.object({
            subscriberId: z.string()
          })
        }
      }
    },
    async (request, reply) => {
      const { subscriberId } = request.params;
      await accessInviteLink({ subscriberId });
      const redirectUrl = new URL(env.WEB_URL);
      redirectUrl.searchParams.set("referrer", subscriberId);
      return reply.redirect(redirectUrl.toString(), 302);
    }
  );
};

export {
  accessInviteLinkRoute
};
