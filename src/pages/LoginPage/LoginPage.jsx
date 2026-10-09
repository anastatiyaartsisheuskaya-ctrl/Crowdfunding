import "./LoginPage.css";
import { useLoginMutation } from "../../modules/auth/api/authApi";
import { setCredentials } from "../../modules/auth/model/authSlice";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading, isSuccess, isError, error }] = useLoginMutation();

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

      dispatch(
        setCredentials({
          user: result,
          token: result.accessToken,
        }),
      );

      navigate("/", { replace: true });
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
              autoComplete="username"
              required
            />
          </label>

          <label className="login__field">
            <span className="login__label">Password</span>
            <input
              className="login__input"
              type="password"
              name="password"
              placeholder="Enter your password"
              autoComplete="current-password"
              required
            />
          </label>

          {isLoading && <p>Logging in...</p>}

          {isError && (
            <p className="login--error" role="alert">
              {error?.data?.message || "Login failed. Please try again."}
            </p>
          )}

          {isSuccess && (
            <p className="login--success">Successfully logged in!</p>
          )}

          <button className="login__button" type="submit" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Log in"}
          </button>
        </form>
      </section>
    </main>
  );
}
