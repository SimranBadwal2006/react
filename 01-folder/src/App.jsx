import './App.css'

const highlights = [
  'Fast setup with Vite and React',
  'Clean, modern card-based layout',
  'Responsive design for any screen',
]

const stats = [
  { label: 'Projects', value: '24+' },
  { label: 'Clients', value: '12' },
  { label: 'Satisfaction', value: '100%' },
]

const App = () => {
  return (
    <div className="app-shell">
      <header className="hero-card">
        <div className="hero-copy">
          <p className="eyebrow">Creative React Studio</p>
          <h1>Build beautiful ideas into polished web experiences.</h1>
          <p className="subtitle">
            This React project is a modern landing page for a product studio focused on speed,
            clarity, and striking presentation.
          </p>
          <div className="actions">
            <a className="primary-btn" href="#highlights">Explore Features</a>
            <a className="secondary-btn" href="#stats">View Metrics</a>
          </div>
        </div>
        <div className="hero-panel">
          <div className="panel-badge">Live Now</div>
          <h2>Launch faster with a focused design system.</h2>
          <p>From ideas to deployment, every section is crafted to feel modern and effortless.</p>
        </div>
      </header>

      <section id="highlights" className="card-grid">
        {highlights.map((item) => (
          <article key={item} className="info-card">
            <h3>✨ Feature</h3>
            <p>{item}</p>
          </article>
        ))}
      </section>

      <section id="stats" className="stats-row">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-card">
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>
    </div>
  )
}

export default App
