import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '', remember: true });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  function handleChange(event) {
    const { name, value, checked, type } = event.target;
    setForm((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    // UI-only demo. Connect this form to your backend API for real authentication.
    setMessage('Login form is ready. Backend connection is needed to sign in securely.');
  }

  return (
    <main className="auth-page">
      <div className="auth-topbar">
        <Link to="/" className="auth-brand">G<span>3</span> Architects</Link>
        <Link to="/" className="back-home">← Back to home</Link>
      </div>
      <section className="auth-layout">
        <div className="auth-visual">
          <div className="visual-content">
            <span className="eyebrow">DESIGN YOUR FUTURE</span>
            <h1>Great spaces<br />start with a<br /><span>great vision.</span></h1>
            <p>Sign in to stay connected with your architecture projects and ideas.</p>
          </div>
          <div className="visual-footer"><span>G3 ARCHITECTS</span><span>BUILDING TOMORROW</span></div>
        </div>
        <div className="auth-form-wrap">
          <div className="auth-form-card">
            <div className="auth-mobile-brand">G<span>3</span> Architects</div>
            <div className="auth-heading">
              <span className="form-kicker">WELCOME BACK</span>
              <h2>Login to your account</h2>
              <p>Enter your details below to continue.</p>
            </div>
            <form onSubmit={handleSubmit} className="auth-form">
              <label htmlFor="login-email">Email address</label>
              <input id="login-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" value={form.email} onChange={handleChange} required />
              <div className="label-row"><label htmlFor="login-password">Password</label><button type="button" className="text-link" onClick={() => setMessage('Please contact the website administrator to reset your password.')}>Forgot password?</button></div>
              <input id="login-password" name="password" type="password" autoComplete="current-password" placeholder="Enter your password" value={form.password} onChange={handleChange} required minLength={6} />
              <label className="remember-row"><input type="checkbox" name="remember" checked={form.remember} onChange={handleChange} /> <span>Remember me</span></label>
              <button className="auth-submit" type="submit">Login <span>→</span></button>
              {message && <p className="auth-message" role="status">{message}</p>}
            </form>
            <p className="auth-switch">Don’t have an account? <Link to="/signup">Create account</Link></p>
            <p className="auth-terms">By continuing, you agree to our <a href="#terms" onClick={(e) => e.preventDefault()}>Terms</a> and <a href="#privacy" onClick={(e) => e.preventDefault()}>Privacy Policy</a>.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
