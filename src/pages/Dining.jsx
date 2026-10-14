import { Link } from 'react-router-dom'

const BANNER =
  'https://core.dhakaregency.com/folders/hero-banner/files/Dinning-Web-P_1717831671724.webp'

const VENUES = [
  {
    name: 'Grand Oise',
    img: 'https://core.dhakaregency.com/folders/dinning/files/Grandoise_1719138866933.png',
    desc: 'All-day dining with international and local flavours.',
  },
  {
    name: 'Grill on the Skyline',
    img: 'https://core.dhakaregency.com/folders/grill-on-the-skyline/files/DULUXE-SUPRIME-(3)-7_1717500182018.png',
    desc: 'Rooftop grill and panoramic city views.',
  },
  {
    name: 'Bubble Flavour Lounge',
    img: 'https://core.dhakaregency.com/folders/bubble-flavour-lounge/files/DULUXE-SUPRIME-(3)-14-(1)_1717500968229.png',
    desc: 'Casual lounge for drinks and light bites.',
  },
]

export default function Dining() {
  return (
    <>
      <section className="page-hero" style={{ backgroundImage: `url(${BANNER})` }}>
        <h1>Dining</h1>
      </section>
      <section className="py-16">
        <div className="container-max">
          <p className="text-center text-muted max-w-2xl mx-auto mb-12">
            From buffet breakfasts to skyline grills — discover dining at Dhaka Regency.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VENUES.map((v) => (
              <article key={v.name} className="card-room">
                <img src={v.img} alt={v.name} className="w-full aspect-[4/3] object-cover" />
                <div className="p-6">
                  <h3 className="text-navy text-xl font-semibold mb-2">{v.name}</h3>
                  <p className="text-muted text-sm">{v.desc}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/book" className="btn-navy">
              Reserve a Table
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
