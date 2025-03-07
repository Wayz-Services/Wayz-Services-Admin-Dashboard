import axios, { AxiosRequestConfig, Method } from "axios";

/**
 * Reusable Axios request function with URLSearchParams body
 * @param url - API endpoint
 * @param method - HTTP method (GET, POST, PUT, DELETE, etc.)
 * @param data - Request body (converted to URLSearchParams)
 * @param headers - Additional headers (optional)
 * @returns Axios response data
 */
const ApiRequest = async <T>(
  url: string,
  method: Method = "POST",
  data: Record<string, any> = {},
  headers: Record<string, string> = {}
): Promise<T> => {
  try {
    // Convert object to URLSearchParams
    const params = new URLSearchParams();
    Object.entries(data).forEach(([key, value]) => {
      params.append(key, value);
    });

    // Axios config
    const config: AxiosRequestConfig = {
      url: `${process.env.NEXT_PUBLIC_API_URL}${url}`,
      method,
      data: params,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        ...headers,
      },
    };

    const response = await axios(config);
    return response.data;
  } catch (error: any) {
    throw error.response?.data || error.message;
  }
};

export default ApiRequest;
