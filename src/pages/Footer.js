import React from 'react';
import '../styles/Footer.css'; // Assuming you'll use CSS for styling

const Footer = () => {
  return (
    <>
    <div className='footer-title'>Day Today</div>
    <div className="menu-container">
      <div className="menu-column">
        <div className="menu-title">NEWS</div>
        <div className="menu-item">Home Page</div>
        <div className="menu-item">U.S.</div>
        <div className="menu-item">World</div>
        <div className="menu-item">Politics</div>
        <div className="menu-item">New York</div>
        <div className="menu-item">Education</div>
        <div className="menu-item">Sports</div>
        <div className="menu-item">Business</div>
        <div className="menu-item">Tech</div>
        <div className="menu-item">Science</div>
        <div className="menu-item">Weather</div>
        <div className="menu-item">The Great Read</div>
        <div className="menu-item">Obituaries</div>
        <div className="menu-item">Headway</div>
        <div className="menu-item">Visual Investigations</div>
        <div className="menu-item">The Magazine</div>
      </div>
      <div className="menu-column">
        <div className="menu-title">ARTS</div>
        <div className="menu-item">Books</div>
        <div className="menu-item">Best Sellers Book List</div>
        <div className="menu-item">Dance</div>
        <div className="menu-item">Movies</div>
        <div className="menu-item">Music</div>
        <div className="menu-item">Pop Culture</div>
        <div className="menu-item">Television</div>
        <div className="menu-item">Theater</div>
        <div className="menu-item">Visual Arts</div>
      </div>
      <div className="menu-column">
        <div className="menu-title">LIFESTYLE</div>
        <div className="menu-item">Health</div>
        <div className="menu-item">Well</div>
        <div className="menu-item">Food</div>
        <div className="menu-item">Restaurant Reviews</div>
        <div className="menu-item">Love</div>
        <div className="menu-item">Travel</div>
        <div className="menu-item">Style</div>
        <div className="menu-item">Fashion</div>
        <div className="menu-item">Real Estate</div>
        <div className="menu-item">T Magazine</div>
      </div>
      <div className="menu-column">
        <div className="menu-title">OPINION</div>
        <div className="menu-item">Today's Opinion</div>
        <div className="menu-item">Columnists</div>
        <div className="menu-item">Editorials</div>
        <div className="menu-item">Guest Essays</div>
        <div className="menu-item">Op-Docs</div>
        <div className="menu-item">Letters</div>
        <div className="menu-item">Sunday Opinion</div>
        <div className="menu-item">Opinion Video</div>
        <div className="menu-item">Opinion Audio</div>
      </div>
      <div className="menu-column">
        <div className="menu-title">MORE</div>
        <div className="menu-item">Audio</div>
        <div className="menu-item">Games</div>
        <div className="menu-item">Cooking</div>
        <div className="menu-item">Wirecutter</div>
        <div className="menu-item">The Athletic</div>
        <div className="menu-item">Jobs</div>
        <div className="menu-item">Video</div>
        <div className="menu-item">Graphics</div>
        <div className="menu-item">Trending</div>
        <div className="menu-item">Live Events</div>
        <div className="menu-item">Corrections</div>
        <div className="menu-item">Reader Center</div>
        <div className="menu-item">TimesMachine</div>
        <div className="menu-item">The Learning Network</div>
        <div className="menu-item">School of The NYT</div>
        <div className="menu-item">inEducation</div>
      </div>
      <div className="menu-column act">
        <div className="menu-title">ACCOUNT</div>
        <div className="menu-item bold-footer">Subscribe</div>
        <div className="menu-item  bold-footer">Manage My Account</div>
        <div className="menu-item  bold-footer">Home Delivery</div>
        <div className="menu-item  bold-footer">Gift Subscriptions</div>
        <div className="menu-item small-txt">Group Subscriptions</div>
        <div className="menu-item small-txt">Gift Articles</div>
        <div className="menu-item small-txt">Email Newsletters</div>
        <hr />
        <div className="menu-item small-txt">NYT Licensing</div>
        <div className="menu-item small-txt">Replica Edition</div>
        <div className="menu-item small-txt">Times Store</div>
      </div>
    </div>
    <FooterBottom  />
    </>
  );
};

export default Footer;







const FooterBottom = () => {
  return (
    <footer className="footer-container">
    
      <div className="footer-links">
      <div className="footer-link"> © 2024 The New York Times Company </div>
        <div className="footer-link">NYTCo</div>
        <div className="footer-link">Contact Us</div>
        <div className="footer-link">Accessibility</div>
        <div className="footer-link">Work with us</div>
        <div className="footer-link">Advertise</div>
        <div className="footer-link">T Brand Studio</div>
        <div className="footer-link">Your Ad Choices</div>
        <div className="footer-link">Privacy Policy</div>
        <div className="footer-link">Terms of Service</div>
        <div className="footer-link">Terms of Sale</div>
        <div className="footer-link">Site Map</div>
        <div className="footer-link">Help</div>
        <div className="footer-link">Subscriptions</div>
      </div>
    </footer>
  );
};


