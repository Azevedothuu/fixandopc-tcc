import { useState } from "react";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("https://fixando-backend.vercel.app/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Erro ao fazer login");
        return;
      }

      // Guarda token (pode usar localStorage)
      localStorage.setItem("token", data.token);

      alert("Logado com sucesso!");
    } catch {
      setError("Erro inesperado, tente novamente");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <form
        onSubmit={handleLogin}
        className="bg-white w-full max-w-md p-6 rounded-xl shadow-lg"
      >
        <h2 className="text-2xl font-semibold mb-4">Entrar</h2>

        {error && (
          <div className="text-red-600 mb-3">{error}</div>
        )}

        <label className="block mb-3">
          <span className="text-sm">Email</span>
          <input
            type="email"
            className="w-full mt-1 border rounded px-3 py-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label className="block mb-4">
          <span className="text-sm">Senha</span>
          <input
            type="password"
            className="w-full mt-1 border rounded px-3 py-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button
          disabled={loading}
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          {loading ? "Entrando..." : "Entrar"}
        </button>
      </form>
    </div>
  );
}
