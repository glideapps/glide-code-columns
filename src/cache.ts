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

  async get(
    key: string,
    work?: (key: string) => Promise<T | undefined>
  ): Promise<T | undefined> {
    const { timestamp, item } = this.cache.get(key) ?? {
      timestamp: new Date(0),
    };
    if (elapsedSeconds(timestamp) < this.props.timeoutSeconds) {
      return item;
    } else if (work !== undefined) {
      const found = await work(key);
      if (found !== undefined) {
        this.set(key, found);
        return found;
      }
    } else {
      this.cache.delete(key);
      return undefined;
    }
  }

  set(key: string, item: T) {
    return this.cache.set(key, { timestamp: new Date(), item });
  }

  async fetch(url: string, key = url): Promise<T | undefined> {
    return await this.get(key, () => fetch(url).then(x => x.json()));
  }
}
