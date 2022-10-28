import "./Login.css";

export default function Login() {
  return (
    <div className="container">
      <div className="login-box">Ready to make your ultimate team?</div>
      <form>
        <input
          type="username"
          name="username"
          placeholder="username..."
          required
        />
        <input
          type="password"
          name="password"
          placeholder="password..."
          required
        />
        <button type="submit" className="btn">
          Log in
        </button>
      </form>
    </div>
  );
}
