import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

const LOGO = 'https://dhakaregency.com/logo.png'

const NAV = [
  { to: '/', label: 'Home' },
  { to: '/rooms', label: 'Rooms & Suits' },
  { to: '/dining', label: 'Dining' },
  { to: '/meetings', label: 'Meetings & Events' },
  { to: '/wellness', label: 'Wellness' },
  { to: '/premier-club', label: 'Premier Club' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/offers', label: 'Offers' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container-max flex items-center justify-between h-[80px] gap-4">
        <Link to="/" onClick={() => setOpen(false)}>
          <img src={LOGO} alt="Dhaka Regency" className="h-12 w-auto" />
        </Link>

        <nav className="hidden xl:flex items-center gap-1">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `px-3 py-2 text-[15px] font-medium transition-colors duration-200 ${
                  scrolled
                    ? isActive
                      ? 'text-navy'
                      : 'text-body hover:text-navy'
                    : isActive
                      ? 'text-white'
                      : 'text-white/90 hover:text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/book"
            className="btn-navy !py-2.5 !px-5 !text-sm hidden sm:inline-flex"
          >
            Book Now
          </Link>
          <button
            type="button"
            className={`xl:hidden p-2 ${scrolled || open ? 'text-navy' : 'text-white'}`}
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="xl:hidden bg-white border-t border-gray-100 py-3 max-h-[70vh] overflow-y-auto">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block px-6 py-3 text-[15px] ${isActive ? 'text-navy font-semibold' : 'text-body'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/book"
            className="block mx-6 my-3 btn-navy text-center"
            onClick={() => setOpen(false)}
          >
            Book Now
          </Link>
        </nav>
      )}
    </header>
  )
}
