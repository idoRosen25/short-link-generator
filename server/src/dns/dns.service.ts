import { Injectable } from '@nestjs/common';
import * as dns from 'dns';

@Injectable()
export class DnsLookupService {
  constructor() {}

  async checkValidUrl(url: string): Promise<boolean> {
    const domain = url.match(/^https?:\/\/([^\/]+)/)?.[1];
    return new Promise((resolve, reject) => {
      dns.lookup(domain, (err, address) => {
        if (err || !address) {
          // If there's an error or no address found, the URL is not valid
          resolve(false);
        } else {
          // If an address is found, the URL is valid
          resolve(true);
        }
      });
    });
  }
}
