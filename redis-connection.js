import Redis from 'ioredis';
import "dotenv/config";
function createRedisConnection(){
    return new Redis(
      process.env.REDIS_URL
    )
}

export const redis = createRedisConnection();

export const publisher = createRedisConnection();

export const subscriber = createRedisConnection();