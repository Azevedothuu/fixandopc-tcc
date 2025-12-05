import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { FormLogin } from "@/components/Form"
import {  VideoBackground } from "@/components"
import video from "@assets/Home-bg.mp4"

export function Login() {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleLogin(e: React.FormEvent) {
  e.preventDefault();
  setError(null);
  setLoading(true);

  try {
    const res = await fetch("https://fixando-backend.vercel.app/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.message || "Erro ao fazer login");
      return;
    }

    // salva token
    localStorage.setItem("token", data.token);
    localStorage.setItem("username", data.email);


    // pega dados do usuário logado
    const meRes = await fetch("https://fixando-backend.vercel.app/api/users/me", {
      headers: {
        Authorization: `Bearer ${data.token}`,
      },
    });

    const meData = await meRes.json();

    // salva o usuário
    localStorage.setItem("user", JSON.stringify(meData));

    navigate("/community");
  } catch {
    setError("Erro inesperado");
  } finally {
    setLoading(false);
  }
}


  return (
    <main>
      <section className="relative min-h-screen ">
        <VideoBackground src={video} coverType="absolute"  />
        <div className="flex justify-center items-center h-screen">
          <FormLogin
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            error={error}
            loading={loading}
            handleLogin={handleLogin}
            goToRegister={() => navigate("/register")}
          />
        </div>


      </section>
    </main>
  )
}
