// apiClient.ts
const BASE_URL = import.meta.env.VITE_API_URL ?? "https://fixando-backend.vercel.app/api";

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    credentials: "same-origin",
    ...options,
  });

  const text = await res.text();
  const data = text ? JSON.parse(text) : null;

  if (!res.ok) {
    // tenta extrair mensagem
    const message = data?.message ?? data?.error ?? res.statusText;
    throw new Error(message || "Erro na requisição");
  }

  return data as T;
}

export async function loginApi(body: { email: string; password: string }) {
  return request<{ token: string; user?: any }>("/login", {
    method: "POST",
    body: JSON.stringify(body),
  });
}

export async function registerApi(body: { name: string; email: string; password: string }) {
  return request<{ token: string; user?: any }>("/register", {
    method: "POST",
    body: JSON.stringify(body),
  });
}


