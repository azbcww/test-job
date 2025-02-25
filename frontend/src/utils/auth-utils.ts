// interface AuthHeaders {
//   'access-token': string;
//   client: string;
//   uid: string;
//   expiry: string;
//   'token-type': string;
// }

// let authHeaders: AuthHeaders | null = null;

// export const setAuthHeaders = (headers: Headers) => {
//   authHeaders = {
//     'access-token': headers.get('access-token') || '',
//     client: headers.get('client') || '',
//     uid: headers.get('uid') || '',
//     expiry: headers.get('expiry') || '',
//     'token-type': headers.get('token-type') || ''
//   };
// };

// export const getAuthHeaders = () => {
//   return authHeaders;
// };

// export const clearAuthHeaders = () => {
//   authHeaders = null;
// };

const setAuthCookie = (headers: Headers) => {
  const authToken = headers.get("access-token");
  const client = headers.get("client");
  const uid = headers.get("uid");

  document.cookie = `access-token=${authToken}; path=/; SameSite=Strict`;
  document.cookie = `client=${client}; path=/; SameSite=Strict`;
  document.cookie = `uid=${uid}; path=/; SameSite=Strict`;
};

export const getAuthCookie = (name: string) => {
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split("=");
    if (cookieName === name) return cookieValue;
  }
  return "";
};

const clearCookieValue = (name: string) => {
  // Cookieの有効期限を過去の日付に設定することで削除
  document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Strict`;
};

const clearAuthCookies = () => {
  clearCookieValue("access-token");
  clearCookieValue("client");
  clearCookieValue("uid");
};

interface LoginCredentials {
  email: string;
  password: string;
}

export const login = async ({ email, password }: LoginCredentials) => {
  const response = await fetch("http://localhost:3001/api/v1/auth/sign_in", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error("Login failed");
  }

  setAuthCookie(response.headers);
  return response.json();
};

export const logout = async () => {
  const access_token = getAuthCookie("access-token");
  const client = getAuthCookie("client");
  const uid = getAuthCookie("uid");

  const response = await fetch("http://localhost:3001/api/v1/auth/sign_out", {
    method: "DELETE",
    headers: {
      "access-token": access_token,
      client: client,
      uid: uid,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Logout failed");
  }

  clearAuthCookies();
  return response.json();
};

interface SignUpCredentials {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export const signUp = async (credentials: SignUpCredentials) => {
  const response = await fetch("http://localhost:3001/api/v1/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      email: credentials.email,
      password: credentials.password,
      password_confirmation: credentials.password_confirmation,
      name: credentials.name,
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.errors?.full_messages?.[0] || "Sign up failed");
  }

  setAuthCookie(response.headers);
  return response.json();
};
