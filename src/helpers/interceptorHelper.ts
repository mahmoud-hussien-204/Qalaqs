import {baseURL} from "@/constants";

import AuthHelper from "@/modules/auth/helpers/AuthHelper";

import {toast} from "react-toastify";

export default class InterceptorHelper {
  // intercept request
  static async interceptRequest(options: RequestInit = {}): Promise<RequestInit> {
    // get token
    const token = AuthHelper.getUserData()?.token || "";

    options.headers = {
      Authorization: `Bearer ${token}`,
      "Accept-Language": "en",
      "Content-Language": "en",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Accept: "application/json",
      ...options.headers,
    };

    // delete content type if the body is an object (eg. FormData)
    if (typeof options.body === "object") {
      if (options.headers?.["Content-Type" as keyof HeadersInit]) {
        delete options.headers["Content-Type" as keyof HeadersInit];
      }
    }

    return options;
  }

  // intercept response
  static async interceptResponse<T>(
    response: Response,
    method: string | undefined,
    showAlert: boolean = true
  ): Promise<T> {
    if (response.status === 401 && !location.pathname.startsWith("/auth")) {
      AuthHelper.userLogout();
    }

    const responseJson = await response.json();

    const message = responseJson?.message || responseJson?.error || responseJson.success;

    // handle response error
    if (!response.ok || responseJson.success == false) {
      // if message is array
      if (showAlert) {
        if (Array.isArray(message)) {
          message.forEach((msg) => toast.error(msg));
        } else {
          toast.error(message);
        }
      }
      return Promise.reject(responseJson);
    }

    if (method !== "GET") {
      toast.success(message);
    }

    return responseJson;
  }

  // intercept function
  static async intercept<T>(
    url: string,
    options: RequestInit = {method: "GET"},
    showAlert: boolean = true,
    useBaseURL: boolean = true
  ): Promise<T> {
    // handle request
    const requestOptions = await InterceptorHelper.interceptRequest(options);

    const path = useBaseURL ? `${baseURL + "" + url}` : url;

    console.log(path);
    const response = await fetch(path, requestOptions);

    // handle response
    const responseOption = await InterceptorHelper.interceptResponse<T>(
      response,
      options.method,
      showAlert
    );

    return responseOption;
  }
}
