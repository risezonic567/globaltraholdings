import { createClient } from "redis";

const redisUrl =
  process.env.REDIS_URL || "redis://127.0.0.1:6379";

console.log("🔗 Redis URL:", redisUrl);

const client = createClient({
  url: redisUrl,
});

client.on("error", (err) => {
  console.error("❌ Redis Error:", err);
});

client.on("connect", () => {
  console.log("🔄 Redis connecting...");
});

client.on("ready", () => {
  console.log("✅ Redis READY");
});

client.on("end", () => {
  console.log("🔴 Redis connection closed");
});

export const connectRedis = async () => {
  try {
    if (!client.isOpen) {
      await client.connect();
    }

    console.log("✅ Redis connected successfully");
  } catch (err) {
    console.error("❌ Redis Connection Failed:", err);

    throw err;
  }
};

export default client;