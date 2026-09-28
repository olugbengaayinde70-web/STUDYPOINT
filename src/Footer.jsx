function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand-block">
          <a className="brand footer-brand" href="#home">
            <span className="brand-mark">S</span>
            <span>StudyPoint</span>
          </a>
          <p>
            Learn at your own pace with clear lessons, guided practice, and useful resources built to help you grow with confidence.
          </p>
        </div>

        <div className="footer-links">
          <div>
            <h3>Explore</h3>
            <a href="#lessons">Lessons</a>
            <a href="#courses">Courses</a>
            <a href="#subjects">Subjects</a>
            <a href="#quizzes">Quizzes</a>
          </div>

          <div>
            <h3>Company</h3>
            <a href="#home">About</a>
            <a href="#exams">Teachers</a>
            <a href="#exams">Parents</a>
            <a href="mailto:hello@studypoint.com">Contact</a>
          </div>

          <div>
            <h3>Support</h3>
            <a href="mailto:hello@studypoint.com">hello@studypoint.com</a>
            <a href="tel:+2348000000000">+234 800 000 0000</a>
            <a href="#lessons">FAQ</a>
            <a href="#lessons">Help Center</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2025 StudyPoint. All rights reserved.</span>
        <div className="footer-meta">
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
          <a href="#cookies">Cookies</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer