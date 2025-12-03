import { useState } from "react";

export function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("https://fixando-backend.vercel.app/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Erro ao registrar");
        return;
      }

      localStorage.setItem("token", data.token);

      alert("Conta criada com sucesso!");
    } catch {
      setError("Erro inesperado, tente novamente");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <form
        onSubmit={handleRegister}
        className="bg-white w-full max-w-md p-6 rounded-xl shadow-lg"
      >
        <h2 className="text-2xl font-semibold mb-4">Criar conta</h2>

        {error && (
          <div className="text-red-600 mb-3">{error}</div>
        )}

        <label className="block mb-3">
          <span className="text-sm">Nome</span>
          <input
            className="w-full mt-1 border rounded px-3 py-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label className="block mb-3">
          <span className="text-sm">Email</span>
          <input
            className="w-full mt-1 border rounded px-3 py-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
        </label>

        <label className="block mb-4">
          <span className="text-sm">Senha</span>
          <input
            className="w-full mt-1 border rounded px-3 py-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </label>

        <button
          disabled={loading}
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          {loading ? "Criando..." : "Criar conta"}
        </button>
      </form>
    </div>
  );
}
