import "./LoginPage.css";
import { useLoginMutation } from "../../modules/auth/api/authApi";
import { useNavigate } from "react-router";

export default function LoginPage() {
  const navigate = useNavigate();
  const [login, { isLoading, isSuccess, isError, error, data }] =
    useLoginMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const username = formData.get("username");
    const password = formData.get("password");
    try {
      const result = await login({
        username,
        password,
      }).unwrap();
      localStorage.setItem("accessToken", result.accessToken);
      setTimeout(() => navigate("/"), 700);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <main className="login">
      <section className="login__card">
        <div className="login__header">
          <h1 className="login__title">Welcome back</h1>
          <p className="login__subtitle">Log in to continue to your account</p>
        </div>

        <form className="login__form" onSubmit={handleSubmit}>
          <label className="login__field">
            <span className="login__label">Username</span>
            <input
              className="login__input"
              type="text"
              name="username"
              placeholder="Enter your username"
            />
          </label>

          <label className="login__field">
            <span className="login__label">Password</span>
            <input
              className="login__input"
              type="password"
              name="password"
              placeholder="Enter your password"
            />
          </label>
          {isLoading && <p>Logging in...</p>}

          {isError && (
            <p className="login--error">
              {error?.data?.message || "Login failed"}
            </p>
          )}

          {isSuccess && (
            <p className="login--success">Successfully logged in!</p>
          )}

          <button className="login__button" type="submit">
            Log in
          </button>
        </form>
      </section>
    </main>
  );
}
