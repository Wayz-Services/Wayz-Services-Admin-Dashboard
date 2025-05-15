import axios, { AxiosRequestConfig, Method } from 'axios';

/**
 * Reusable Axios request function with support for JSON and FormData bodies
 * @param url - API endpoint
 * @param method - HTTP method (GET, POST, PUT, DELETE, etc.)
 * @param data - Request body (object or FormData)
 * @param headers - Additional headers (optional)
 * @param isFormData - Whether to send data as FormData (optional)
 * @returns Axios response data
 */
const ApiRequest = async <T>(
  url: string,
  method: Method = 'POST',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Record<string, any> = {},
  headers: Record<string, string> = {},
  isFormData = false,
): Promise<T> => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let requestData: any = data;
    let contentType = 'application/json';

    if (isFormData) {
      requestData = new FormData();

      Object.entries(data).forEach(([key, value]) => {
        requestData.append(key, value);
      });

      contentType = 'multipart/form-data';
    }

    const config: AxiosRequestConfig = {
      url: `${process.env.NEXT_PUBLIC_API_URL}${url}`,
      method,
      data: requestData,
      headers: {
        'Content-Type': contentType,
        ...headers,
      },
    };

    const response = await axios(config);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      throw error.response.data;
    }
    throw error instanceof Error ? error.message : 'An unknown error occurred';
  }
};

export default ApiRequest;
