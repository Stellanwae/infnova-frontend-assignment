export default function Footer() {
  return (
    <footer className="footer">
        <div className="footer-container company-section">
            {/* Left section - Company info */}
            <div className="footer-section">
            <h3>INFNOVA Academy</h3>
            <p>Empowering learners worldwide with cutting-edge technology courses. Start your journey to success with expert-led training.</p>
            </div>

            {/* Quick Links section */}
            <div className="footer-section">
            <h4>Quick Links</h4>
            <p>About Us</p>
            <p>Courses</p>
            <p>Instructors</p>
            <p>Contact</p>
            </div>

            {/* Support section */}
            <div className="footer-section">
            <h4>Support</h4>
            <p>Help Center</p>
            <p>Terms and Conditions</p>
            <p>Privacy Policy</p>
            <p>FAQ</p>
            </div>
        </div>

        {/* Copyright section  */}
        <div className="footer-bottom">
            <p>© 2026 INFNOVA Technologies. All rights reserved.</p>
        </div>
    </footer>
  );
}

