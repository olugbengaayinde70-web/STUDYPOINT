import { useState } from 'react'

function Icon({ children, ...props }) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{children}</svg>
}

function ArrowRight(props) {
  return <Icon {...props}><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></Icon>
}

function Book(props) {
  return <Icon {...props}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" /></Icon>
}

function MenuIcon({ open, ...props }) {
  return <Icon {...props}>{open ? <><path d="m18 6-12 12" /><path d="m6 6 12 12" /></> : <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>}</Icon>
}

const navigation = ['Home', 'Lessons', 'Courses', 'Subjects', 'Quizzes']

function Hero() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main id="home" className="site-shell">
      <header className="site-header">
        <nav className="navbar" aria-label="Main navigation">
          <a className="brand" href="#home"><span className="brand-mark"><Book size={19} /></span><span>StudyPoint</span></a>
          <div className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}>
            {navigation.map((item) => <a key={item} className={item === 'Home' ? 'nav-link active' : 'nav-link'} href={item === 'Home' ? '#home' : `#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>)}
          </div>
          <button className="menu-button" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            <MenuIcon open={menuOpen} />
          </button>
        </nav>
      </header>

      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-copy">
          <span className="eyebrow">A simpler way to learn</span>
          <h1 id="hero-title"><span className="headline-accent">Learn smarter.</span><br />Achieve more.</h1>
          <p className="hero-description">Learn at your own pace with simple lessons, interactive tutorials, and practical resources designed to help you understand more and achieve your goals.</p>
          <div className="hero-actions">
            <a className="button-primary" href="#lessons">Start Learning <ArrowRight size={17} /></a>
          </div>
          <div className="social-proof">
            <span className="student-count"><b>10,000+</b><span>Students learning</span></span>
            <span className="proof-divider" />
            <span className="rating"><b className="stars">★★★★★</b><span><strong>4.9/5</strong> Student rating</span></span>
          </div>
        </div>
        <div className="learning-visual">
          <div className="student-photo-wrap">
            <img className="student-photo" src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=85" alt="Student learning at a laptop" />
          </div>
          <div className="simple-label lesson-label"><span className="label-icon"><Book size={17} /></span><span><b>Learn at your pace</b><small>Short, clear lessons</small></span></div>
          <div className="simple-label progress-label"><span className="progress-check">✓</span><span><b>You're making progress</b><small>One lesson at a time</small></span></div>
        </div>
      </section>

      <section className="learning-section" id="lessons" aria-labelledby="learning-title">
        <div className="section-heading">
          <span className="eyebrow">Your next step starts here</span>
          <h2 id="learning-title">A little learning goes a long way.</h2>
          <p>Choose a starting point. We’ll help you keep moving.</p>
        </div>
        <div className="learning-cards">
          <a className="learning-card" href="#courses" id="courses">
            <span className="learning-card-number">01</span>
            <h3>Explore a course</h3>
            <p>Build your knowledge with clear, guided learning paths.</p>
            <span className="card-link">Browse courses <ArrowRight size={16} /></span>
          </a>
          <a className="learning-card" href="#subjects" id="subjects">
            <span className="learning-card-number">02</span>
            <h3>Find your subject</h3>
            <p>Discover helpful resources for the topics you care about.</p>
            <span className="card-link">View subjects <ArrowRight size={16} /></span>
          </a>
          <a className="learning-card" href="#quizzes" id="quizzes">
            <span className="learning-card-number">03</span>
            <h3>Try a quick quiz</h3>
            <p>Practice what you know and see how far you’ve come.</p>
            <span className="card-link">Take a quiz <ArrowRight size={16} /></span>
          </a>
        </div>
      </section>
    </main>
  )
}

export default Hero
