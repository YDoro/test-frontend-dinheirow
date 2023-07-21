export interface HttpClientResponse<T> {
  status: number;
  data?: T;
}

export interface HttpClient {
  get<T>(url: string): Promise<HttpClientResponse<T>>;
}
