import React from 'react'
import "./footer.css"

const footer = () => {
  return (
    <div>
       <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>About Us</h3>
                    <p>We are a company that values excellence and innovation. Our mission is to provide the best services to our clients.</p>
                </div>
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">About</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <p>Email: info@example.com</p>
                    <p>Phone: +123 456 7890</p>
                    <p>Address: 123 Main St, City, Country</p>
                </div>
            </div>
            <div className="footer-bottom">
                &copy; 2024 Your Company. All rights reserved.
            </div>
        </footer>
    </div>
  )
}

export default footer
