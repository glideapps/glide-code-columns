type CacheItem<T> = { timestamp: Date; item: T };

interface Props {
  timeoutSeconds: number;
}

const defaultProps: Props = {
  timeoutSeconds: 5,
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

  get(key: string): T | undefined {
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

  set(key: string, item: T) {
    return this.cache.set(key, { timestamp: new Date(), item });
  }

  async fetch(url: string, key = url): Promise<T | undefined> {
    const item = this.get(key) ?? (await fetch(url).then(x => x.json()));
    this.set(key, item);
    return item;
  }
}
