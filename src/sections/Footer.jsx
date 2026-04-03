import './Footer.css'

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-col">
            <h4 className="footer-heading">Company</h4>
            <a href="#">Home</a>
            <a href="#">Studio</a>
            <a href="#">Service</a>
            <a href="#">Blog</a>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-heading">Terms & Policies</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Explore</a>
            <a href="#">Accessibility</a>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-heading">Follow Us</h4>
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
            <a href="#">Youtube</a>
            <a href="#">Twitter</a>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-heading">Terms & Policies</h4>
            <p className="footer-text">
              1498w Fluton ste, STE<br/>
              2D Chicgo, IL 63867.
            </p>
            <p className="footer-text footer-space">
              (123) 456789000
            </p>
            <p className="footer-text footer-space">
              info@elementum.com
            </p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>©2023 Elementum. All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}
