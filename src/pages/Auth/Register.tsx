import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormRegister } from "@/components/Form";
import { VideoBackground } from "@/components";
import video from '@assets/Home-bg.mp4'

export function Register() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError("As senhas não coincidem");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("https://fixando-backend.vercel.app/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Erro ao criar conta");
        return;
      }

      navigate("/login");
    } catch {
      setError("Erro inesperado, tente novamente");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main>
      <section className="relative min-h-screen ">
        <VideoBackground src={video} coverType="absolute"  />
        <div className="flex justify-center items-center h-screen">
      <FormRegister
        username={username}
        setUsername={setUsername}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        confirmPassword={confirmPassword}
        setConfirmPassword={setConfirmPassword}
        loading={loading}
        error={error}
        handleRegister={handleRegister}
        goToLogin={() => navigate("/login")}
      />
      </div>
      </section>


      

    </main>
  );
}
