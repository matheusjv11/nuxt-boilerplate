type MethodType = "GET" | "POST" | "PUT" | "DELETE";

type FetchHeaders = {
  Accept?: string;
  Authorization?: string;
  "Content-Type": string;
  token?: string;
};

type FetchInitOptions = {
  method: MethodType;
  headers: FetchHeaders;
  body?: string;
};

export class FetchHttpClient {
  public static async get<T>(url: string): Promise<T> {
    return this.request<T>(url);
  }

  public static async post<T>(url: string, body: Object) {
    return this.request<T>(url, "POST", body);
  }

  public static async put<T>(url: string, body: Object) {
    return this.request<T>(url, "PUT", body);
  }

  public static async delete<T>(url: string, body: Object = {}) {
    return this.request<T>(url, "DELETE", body);
  }

  private static async request<T>(
    url: string,
    method: MethodType = "GET",
    body: Object = {},
  ) {
    const response = await fetch(
      url,
      (await this.getFetchOptions(method, body)) as any,
    );

    if (!response.ok) {
      console.error("Erro na requisição", response);
    }

    return response.json() as Promise<T>;
  }

  private static async getFetchOptions(
    method: MethodType,
    body: Object,
  ): Promise<FetchInitOptions> {
    const optionsHeaders = await this.getFetchHeaders();

    const options: FetchInitOptions = {
      method,
      headers: optionsHeaders,
    };

    if (method !== "GET") {
      options.body = JSON.stringify(body);
    }

    return options;
  }

  private static async getFetchHeaders(): Promise<FetchHeaders> {
    return {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json; charset=UTF-8",
    };
  }
}
