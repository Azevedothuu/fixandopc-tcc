import styled from "styled-components";

export const FormRegister = ({
  username,
  setUsername,
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  loading,
  error,
  handleRegister,
  goToLogin,
}: {
  username: string;
  setUsername: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  confirmPassword: string;
  setConfirmPassword: (value: string) => void;
  loading: boolean;
  error: string | null;
  handleRegister: (e: React.FormEvent) => void;
  goToLogin: () => void;
}) => {
  return (
    <StyledWrapper>
      <div className="container">
        <form className="form" onSubmit={handleRegister}>
          <div className="form_back">
            <div className="form_details">Sign Up</div>

            {error && <div style={{ color: "red" }}>{error}</div>}

            <input
              placeholder="Username"
              className="input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              placeholder="Email"
              className="input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              placeholder="Password"
              className="input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <input
              placeholder="Confirm Password"
              className="input"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <button className="btn" disabled={loading}>
              {loading ? "Criando conta..." : "Sign Up"}
            </button>

            <span className="switch">
              Já tem conta?
              <button type="button" className="signup_tog" onClick={goToLogin}>
                Sign In
              </button>
            </span>
          </div>
        </form>
      </div>
    </StyledWrapper>
  );
};


const StyledWrapper = styled.div`
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .form {
    display: flex;
    justify-content: center;
    align-items: center;
    transform-style: preserve-3d;
    transition: all 1s ease;
  }

  .form .form_back {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    position: absolute;
    backface-visibility: hidden;
    padding: 65px 45px;
    border-radius: 15px;
    box-shadow: inset 2px 2px 10px rgba(0,0,0,1),
    inset -1px -1px 5px rgba(255, 255, 255, 0.6);
  }

  .form_details {
    font-size: 25px;
    font-weight: 600;
    padding-bottom: 10px;
    color: white;
  }

  .input {
    width: 245px;
    min-height: 45px;
    color: #fff;
    outline: none;
    transition: 0.35s;
    padding: 0px 7px;
    background-color: #212121;
    border-radius: 6px;
    border: 2px solid #212121;
    box-shadow: 6px 6px 10px rgba(0,0,0,1),
    1px 1px 10px rgba(255, 255, 255, 0.6);
  }

  .input::placeholder {
    color: #999;
  }

  .btn {
    padding: 10px 35px;
    cursor: pointer;
    background-color: #212121;
    border-radius: 6px;
    border: 2px solid #212121;
    box-shadow: 6px 6px 10px rgba(0,0,0,1),
    1px 1px 10px rgba(255, 255, 255, 0.6);
    color: #fff;
    font-size: 15px;
    font-weight: bold;
    transition: 0.35s;
  }

  .switch {
    font-size: 13px;
    color: white;
  }
`;
