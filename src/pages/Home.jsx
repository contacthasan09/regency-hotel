import { Link } from 'react-router-dom'

const HERO_VIDEO =
  'https://core.dhakaregency.com/folders/hero-banner/files/Video-for-Website-(Horizontal)-@-DHAKA-REGENCY-01_1719834725029.webm'
const IMG_STAY1 = 'https://core.dhakaregency.com/folders/stay-relax/files/Frame-36665_1717671780001.png'
const IMG_STAY2 = 'https://core.dhakaregency.com/folders/stay-relax/files/Frame-36664_1717671793462.png'
const PREMIER = 'https://dhakaregency.com/premier-club2.png'
const HOME3 = 'https://dhakaregency.com/home3.png'
const HOME6 = 'https://dhakaregency.com/home6.png'

export default function Home() {
  return (
    <>
      {/* Video hero */}
      <section className="relative h-screen min-h-[560px] overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={HERO_VIDEO}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-navyDeep/50" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5 text-white">
          <p className="text-teal text-sm tracking-widest uppercase mb-3 font-medium">Welcome</p>
          <h1 className="text-4xl md:text-5xl lg:text-[48px] font-semibold leading-tight max-w-3xl mb-6">
            Dhaka Regency Hotel &amp; Resort
          </h1>
          <p className="text-white/85 max-w-lg mb-10 text-[17px]">
            Stay, dine, celebrate and unwind — in the heart of the capital.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/book" className="btn-navy">
              Book Now
            </Link>
            <Link to="/rooms" className="btn-white">
              Explore Rooms
            </Link>
          </div>
        </div>
      </section>

      {/* Stay & relax */}
      <section className="py-20 bg-mist">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="section-title">Stay &amp; Relax</h2>
            <p className="text-muted">
              Spacious rooms and suites designed for comfort after a long journey or a full day in the city.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link to="/rooms" className="card-room block group">
              <img src={IMG_STAY1} alt="Rooms" className="w-full aspect-[16/10] object-cover" />
              <div className="p-6">
                <h3 className="text-navy text-xl font-semibold group-hover:text-teal transition-colors">
                  Rooms &amp; Suits
                </h3>
                <p className="text-muted text-sm mt-2">Regular &amp; Executive floors</p>
              </div>
            </Link>
            <Link to="/premier-club" className="card-room block group">
              <img src={PREMIER} alt="Premier Club" className="w-full aspect-[16/10] object-cover" />
              <div className="p-6">
                <h3 className="text-navy text-xl font-semibold group-hover:text-teal transition-colors">
                  Premier Club
                </h3>
                <p className="text-muted text-sm mt-2">Elevated privileges &amp; lounge access</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { img: HOME3, title: 'Dining', to: '/dining', desc: 'Restaurants & lounges' },
              { img: HOME6, title: 'Wellness', to: '/wellness', desc: 'Spa, pool & fitness' },
              { img: IMG_STAY2, title: 'Meetings', to: '/meetings', desc: 'Halls & celebrations' },
            ].map((item) => (
              <Link key={item.title} to={item.to} className="group block">
                <div className="overflow-hidden rounded-[12px] mb-4 shadow-soft">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-navy text-xl font-semibold group-hover:text-teal transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted text-sm">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 bg-navy text-white text-center">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Ready to stay with us?</h2>
          <p className="text-white/80 mb-8 max-w-md mx-auto">
            Check availability and book your room online.
          </p>
          <Link to="/book" className="btn-white">
            Book Your Stay
          </Link>
        </div>
      </section>
    </>
  )
}
