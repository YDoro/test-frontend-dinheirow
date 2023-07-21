interface HttpResponse<T> {
  status: number;
  data?: T;
}

export interface HttpClient {
  get<T>(url: string): Promise<HttpResponse<T>>;
}
