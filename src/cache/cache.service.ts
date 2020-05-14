import { Injectable } from '@nestjs/common';
import * as redis from 'redis';
import { config } from '../config';

@Injectable()
export class CacheService {
  private client: any;
  constructor() {
    this.client = redis.createClient(config.redisUrl);
  }

  save(key: string, data: string, duration?: number): Promise<void> {
    return new Promise((resolve, reject) => {
      if (duration) {
        this.client.set(key, data, 'EX', duration, err => {
          if (err) return reject(err);

          return resolve();
        });
      } else {
        this.client.set(key, data, err => {
          if (err) return reject(err);

          return resolve();
        });
      }
    });
  }

  get(key: string): Promise<string | null> {
    return new Promise((resolve, reject) => {
      this.client.get(key, (err, res) => {
        if (err) return reject(err);

        return resolve(res);
      });
    });
  }
}
