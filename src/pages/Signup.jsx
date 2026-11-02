import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [message, setMessage] = useState('');

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (form.password !== form.confirmPassword) {
      setMessage('Passwords do not match. Please check again.');
      return;
    }
    // UI-only demo. Never store passwords in the frontend; send them to a secure backend.
    setMessage('Your form is valid. Connect a backend to create and save your account.');
  }

  return (
    <main className="auth-page">
      <div className="auth-topbar">
        <Link to="/" className="auth-brand">G<span>3</span> Architects</Link>
        <Link to="/" className="back-home">← Back to home</Link>
      </div>
      <section className="auth-layout signup-layout">
        <div className="auth-visual">
          <div className="visual-content">
            <span className="eyebrow">LET’S BUILD SOMETHING</span>
            <h1>Your next<br />chapter starts<br /><span>right here.</span></h1>
            <p>Create an account to keep your ideas, plans and projects in one place.</p>
          </div>
          <div className="visual-footer"><span>G3 ARCHITECTS</span><span>INSPIRED BY DESIGN</span></div>
        </div>
        <div className="auth-form-wrap">
          <div className="auth-form-card signup-card">
            <div className="auth-mobile-brand">G<span>3</span> Architects</div>
            <div className="auth-heading">
              <span className="form-kicker">GET STARTED</span>
              <h2>Create your account</h2>
              <p>Fill in your details to join us.</p>
            </div>
            <form onSubmit={handleSubmit} className="auth-form">
              <label htmlFor="signup-name">Full name</label>
              <input id="signup-name" name="name" type="text" autoComplete="name" placeholder="Your full name" value={form.name} onChange={handleChange} required />
              <label htmlFor="signup-email">Email address</label>
              <input id="signup-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" value={form.email} onChange={handleChange} required />
              <label htmlFor="signup-password">Password</label>
              <input id="signup-password" name="password" type="password" autoComplete="new-password" placeholder="At least 6 characters" value={form.password} onChange={handleChange} minLength={6} required />
              <label htmlFor="signup-confirm-password">Confirm password</label>
              <input id="signup-confirm-password" name="confirmPassword" type="password" autoComplete="new-password" placeholder="Type your password again" value={form.confirmPassword} onChange={handleChange} minLength={6} required />
              <button className="auth-submit" type="submit">Create account <span>→</span></button>
              {message && <p className="auth-message" role="status">{message}</p>}
            </form>
            <p className="auth-switch">Already have an account? <Link to="/login">Login</Link></p>
            <p className="auth-terms">Your information should be handled securely by the website backend.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
