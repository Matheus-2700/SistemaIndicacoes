import { fastify } from 'fastify'
import { fastifyCors } from '@fastify/cors'
import 'dotenv/config'
import {
  validatorCompiler,
  serializerCompiler,
  type ZodTypeProvider,
  jsonSchemaTransform,
} from 'fastify-type-provider-zod'
import { z } from 'zod'
import { fastifySwagger } from '@fastify/swagger'
import { fastifySwaggerUi } from '@fastify/swagger-ui'
import { subscribeToEventRoute } from './routes/subscribe-to-event-route'
import { accessInviteLinkRoute } from './routes/access-invite-link-route'
import { getSubscriberInvitesCountRoute } from './routes/get-subscriber-invites-count-route'
import { getSubscriberRankingPositionRoute } from './routes/get-subscriber-rank-positions-route'
import { getRankingRoute } from './routes/get-ranking-route'

const app = fastify().withTypeProvider<ZodTypeProvider>() // Criando minha aplicação

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.register(fastifyCors)
app.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'NLW COnnect',
      version: '0.0.1',
    },
  },
  transform: jsonSchemaTransform,
})

app.register(fastifySwaggerUi, {
  routePrefix: '/docs',
})

app.register(subscribeToEventRoute)
app.register(accessInviteLinkRoute)
app.register(getSubscriberInvitesCountRoute)
app.register(getSubscriberRankingPositionRoute)
app.register(getRankingRoute)

app.listen({ port: 3333, host: '127.0.0.1' }).then(() => {
  console.log('🚀 HTTP server running on http://127.0.0.1:3333')
})
