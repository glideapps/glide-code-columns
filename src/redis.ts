import { createClient } from "redis";
import { RedisClientType } from "redis/dist/lib/client";
import { RedisModules } from "redis/dist/lib/commands";
import { RedisLuaScripts } from "redis/dist/lib/lua-script";

export type Counter = string;
export type Node = string;

function lastUpdatedKey(counter: Counter, node: Node): string {
  return `${counter}:${node}`;
}

function basicCountKey(counter: Counter, node: Node): string {
  return `${counter}:${node}-count`;
}

export class CounterClient {
  constructor(
    private readonly client: RedisClientType<RedisModules, RedisLuaScripts>
  ) {}

  public async getCount(counter: Counter): Promise<number> {
    const counts = await this.client.hVals(counter);
    const countSum = counts
      .map((c) => Number.parseInt(c, 10))
      .reduce((acc, n) => acc + n, 0);

    return countSum;
  }

  public async updateCount(
    counter: Counter,
    node: Node,
    count: number,
    updated: string
  ) {
    const lastUpdated = lastUpdatedKey(counter, node);
    const lastUpdate = await this.client.get(lastUpdated);
    if (new Date(lastUpdate).getTime() < new Date(updated).getTime()) {
      await this.client.set(lastUpdated, updated);
      await this.client.hSet(counter, { [node]: `${count}` });
    }
  }

  public async increment(counter: Counter, node: Node) {
    const basicCount = basicCountKey(counter, node);
    return await this.client.incr(basicCount);
  }

  public async decrement(counter: Counter, node: Node) {
    const basicCount = basicCountKey(counter, node);
    return await this.client.decr(basicCount);
  }

  public async getNodes(counter: Counter) {
    return { ...(await this.client.hGetAll(counter)) };
  }

  public async disconnect() {
    await this.client.disconnect();
  }
}

export async function connect() {
  const client = createClient({
    socket: {
      url: process.env.REDIS!,
    },
  });

  client.on("error", (err: any) => {
    throw new Error(`Redis Client Error ${err}`);
  });

  await client.connect();

  return new CounterClient(client);
}
