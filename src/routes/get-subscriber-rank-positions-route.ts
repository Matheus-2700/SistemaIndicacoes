import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { GetSubscriberRankingPosition } from '../functions/get-subscriber-rank-position'

export const getSubscriberRankingPositionRoute: FastifyPluginAsyncZod =
  async app => {
    app.get(
      '/subscribers/:subscriberId/ranking/position',
      {
        schema: {
          summary: 'Get subscriber ranking position',
          tags: ['referral'],
          params: z.object({
            subscriberId: z.string(),
          }),
          response: {
            200: z.object({
              position: z.number().nullable(),
            }),
          },
        },
      },
      async request => {
        const { subscriberId } = request.params

        const { position } = await GetSubscriberRankingPosition({
          subscriberId,
        })

        return { position }
      }
    )
  }
