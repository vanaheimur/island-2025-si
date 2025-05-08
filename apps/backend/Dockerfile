FROM node:22-alpine AS base

FROM base AS builder
RUN apk update
RUN apk add --no-cache libc6-compat

WORKDIR /app
COPY . .
RUN corepack enable

# This creates an optimized folder and file structure for building
RUN npx turbo@2.5.2 prune backend --docker

# Add lockfile and package.json's of isolated subworkspace
FROM base AS installer
RUN apk update
RUN apk add --no-cache libc6-compat
RUN apk add --no-cache openjdk17
WORKDIR /app

# We fetch all the json files needed to install the dependencies
COPY --from=builder /app/out/json/ .
RUN corepack enable
RUN yarn install --frozen-lockfile

# Build the project
ARG TURBO_TEAM
ENV TURBO_TEAM=$TURBO_TEAM

ARG TURBO_TOKEN
ENV TURBO_TOKEN=$TURBO_TOKEN

ENV RSK_API_BASE_URL="http://digital-iceland-2025-rsk-2082447651.eu-west-1.elb.amazonaws.com"
ENV NR_API_BASE_URL="http://digital-iceland-2025-nr-426789677.eu-west-1.elb.amazonaws.com"
ENV AUTH_TOKEN_SECRET="buildMeABetterFuture"

COPY --from=builder /app/out/full/ .
RUN corepack enable
RUN yarn turbo run bundle --force

FROM base AS runner
WORKDIR /app

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nestjs
USER nestjs

# Automatically leverage output traces to reduce image size
COPY --from=installer --chown=nestjs:nodejs /app/apps/backend/dist/compiled ./

CMD node index.js
