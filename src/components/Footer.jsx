import { Link } from 'react-router-dom'

const LOGO = 'https://dhakaregency.com/logo.png'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container-max py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <img src={LOGO} alt="Dhaka Regency" className="h-12 mb-4" />
            <p className="text-muted text-sm leading-relaxed">
              Dhaka Regency Hotel &amp; Resort — comfort, dining, wellness and events in the heart of Dhaka.
            </p>
          </div>
          <div>
            <h4 className="text-navy font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li><Link to="/rooms" className="hover:text-navy">Rooms &amp; Suits</Link></li>
              <li><Link to="/dining" className="hover:text-navy">Dining</Link></li>
              <li><Link to="/meetings" className="hover:text-navy">Meetings &amp; Events</Link></li>
              <li><Link to="/wellness" className="hover:text-navy">Wellness</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-navy font-semibold mb-4">More</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li><Link to="/premier-club" className="hover:text-navy">Premier Club</Link></li>
              <li><Link to="/gallery" className="hover:text-navy">Gallery</Link></li>
              <li><Link to="/offers" className="hover:text-navy">Offers</Link></li>
              <li><Link to="/book" className="hover:text-navy">Book Now</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-navy font-semibold mb-4">Contact</h4>
            <p className="text-sm text-muted leading-relaxed">
              Airport Road, Dhaka
              <br />
              Bangladesh
            </p>
            <Link to="/book" className="btn-navy mt-4 !py-2.5 !px-5 !text-sm">
              Book a Stay
            </Link>
          </div>
        </div>
        <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row justify-between gap-2 text-xs text-muted">
          <p>© {new Date().getFullYear()} Dhaka Regency Hotel &amp; Resort. All rights reserved.</p>
          <img src="https://dhakaregency.com/Payment.png" alt="Payment methods" className="h-6 object-contain" />
        </div>
      </div>
    </footer>
  )
}
