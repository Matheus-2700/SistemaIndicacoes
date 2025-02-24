import {
  redis
} from "./chunk-XD7SWHLD.mjs";

// src/functions/acces-invite-link.ts
async function accessInviteLink({
  subscriberId
}) {
  await redis.hincrby("referral:access-count", subscriberId, 1);
}

export {
  accessInviteLink
};
