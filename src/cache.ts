type CacheItem<T> = { timestamp: Date; item: T };

interface Props {
  timeoutSeconds: number;
}

const defaultProps: Props = {
  timeoutSeconds: 5 * 60,
};

function elapsedSeconds(date: Date): number {
  return (new Date().getTime() - date.getTime()) / 1000;
}

export class Cache<T = any> {
  private props: Props;
  private cache = new Map<string, CacheItem<T>>();

  constructor(props: Partial<Props> = defaultProps) {
    this.props = { ...props, ...defaultProps };
  }

  async get(key: string): Promise<T | undefined> {
    const { timestamp, item } = this.cache.get(key) ?? {
      timestamp: new Date(0),
    };
    if (elapsedSeconds(timestamp) < this.props.timeoutSeconds) {
      return item;
    } else {
      this.cache.delete(key);
      return undefined;
    }
  }

  async getWith(key: string, work: (key: string) => Promise<T>): Promise<T> {
    const { timestamp, item } = this.cache.get(key) ?? {
      timestamp: new Date(0),
    };
    if (elapsedSeconds(timestamp) < this.props.timeoutSeconds) {
      return item!;
    } else {
      const found = await work(key);
      this.set(key, found);
      return found;
    }
  }

  set(key: string, item: T) {
    return this.cache.set(key, { timestamp: new Date(), item });
  }

  async fetch(url: string, key = url): Promise<T> {
    return await this.getWith(key, () => fetch(url).then(x => x.json()));
  }
}
