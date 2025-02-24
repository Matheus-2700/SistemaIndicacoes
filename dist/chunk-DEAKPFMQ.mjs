import {
  redis
} from "./chunk-XD7SWHLD.mjs";

// src/functions/get-subscriber-rank-position.ts
async function GetSubscriberRankingPosition({
  subscriberId
}) {
  const rank = await redis.zrevrank("referral:ranking", subscriberId);
  if (rank === null) {
    return { position: null };
  }
  return { position: rank + 1 };
}

export {
  GetSubscriberRankingPosition
};
