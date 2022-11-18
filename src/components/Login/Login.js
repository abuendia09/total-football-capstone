//styles
import "./Login.css";

export default function Login() {
  return (
    <div className="container">
      <div className="login-box">Ready to make your ultimate team?</div>

      <form>
        <label htmlFor="username">Username:</label>
        <input
          type="username"
          name="username"
          placeholder="Enter username"
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          required
        />
        <button type="submit" className="btn">
          Log in
        </button>
      </form>
    </div>
  );
}
