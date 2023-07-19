//TODO -  improve types
export interface HttpClient {
  get(url: string): Promise<any>;
}
