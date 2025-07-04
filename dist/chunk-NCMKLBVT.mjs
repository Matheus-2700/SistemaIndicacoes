import {
  redis
} from "./chunk-XD7SWHLD.mjs";

// src/functions/get-subscriber-invites-count.ts
async function getSubscriberInvitesCount({
  subscriberId
}) {
  const count = await redis.zscore("referral:ranking", subscriberId);
  return { count: count ? Number.parseInt(count) : 0 };
}

export {
  getSubscriberInvitesCount
};
