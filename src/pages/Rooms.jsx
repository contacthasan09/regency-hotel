import { useState } from 'react'
import { Link } from 'react-router-dom'

const BANNER =
  'https://core.dhakaregency.com/folders/hero-banner/files/banner_1717664045662-(1)_1719468554824.webp'

const REGULAR = [
  {
    name: 'Standard Room',
    img: 'https://core.dhakaregency.com/folders/standard-room-gallery/files/Standard-(3)-(1)-1_1718024107137.png',
    desc: 'Comfortable stay with essential amenities.',
  },
  {
    name: 'Standard Twin',
    img: 'https://core.dhakaregency.com/folders/standard-twin-gallery/files/Standard-Twin-(1)-1_1718025104619.png',
    desc: 'Twin beds ideal for friends or colleagues.',
  },
  {
    name: 'Standard Twin Deluxe',
    img: 'https://core.dhakaregency.com/folders/standard-twin-gallery/files/Standard-Twin-(3)-(1)-1_1718025111359.png',
    desc: 'Extra space and refined finishes.',
  },
]

const EXECUTIVE = [
  {
    name: 'Luxury Deluxe',
    img: 'https://core.dhakaregency.com/folders/luxury-deluxe-gallery/files/LUXURY-DELUXE-(2)-1_1718038757697.png',
    desc: 'Executive-floor comfort and elevated service.',
  },
  {
    name: 'Premium Twin',
    img: 'https://core.dhakaregency.com/folders/regency-premium-twin/files/Premium-Twin_1717660918053.png',
    desc: 'Spacious twin layout on the executive level.',
  },
  {
    name: 'Executive Suite',
    img: 'https://core.dhakaregency.com/folders/standard-twin-gallery/files/Standard-Twin-(4)-2_1718025121188.png',
    desc: 'Suite living with premium views and lounge access.',
  },
]

export default function Rooms() {
  const [floor, setFloor] = useState('regular')
  const list = floor === 'regular' ? REGULAR : EXECUTIVE

  return (
    <>
      <section className="page-hero" style={{ backgroundImage: `url(${BANNER})` }}>
        <h1>Rooms &amp; Suits</h1>
      </section>

      <section className="py-16">
        <div className="container-max">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              type="button"
              onClick={() => setFloor('regular')}
              className={`px-8 py-3 rounded-btn text-sm font-semibold transition-colors duration-200 ${
                floor === 'regular'
                  ? 'bg-navy text-white'
                  : 'bg-mist text-navy hover:bg-navy/10'
              }`}
            >
              Regular Floor
            </button>
            <button
              type="button"
              onClick={() => setFloor('executive')}
              className={`px-8 py-3 rounded-btn text-sm font-semibold transition-colors duration-200 ${
                floor === 'executive'
                  ? 'bg-navy text-white'
                  : 'bg-mist text-navy hover:bg-navy/10'
              }`}
            >
              Executive Floor
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {list.map((room) => (
              <article key={room.name} className="card-room">
                <img src={room.img} alt={room.name} className="w-full aspect-[4/3] object-cover" />
                <div className="p-6">
                  <h3 className="text-navy text-xl font-semibold mb-2">{room.name}</h3>
                  <p className="text-muted text-sm mb-4">{room.desc}</p>
                  <Link to="/book" className="btn-navy !py-2.5 !px-5 !text-sm">
                    Book Now
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
