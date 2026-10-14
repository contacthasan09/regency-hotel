import { Link } from 'react-router-dom'

const BANNER =
  'https://core.dhakaregency.com/folders/offer-cover/files/WEBSITE-HEADER_1755780076466.png'

const OFFERS = [
  {
    name: 'Weekend Delicacy',
    img: 'https://core.dhakaregency.com/folders/weekend-delicacy/files/Weekend-Delicacy_1749979878354.png',
  },
  {
    name: 'GR Fusion Buffet',
    img: 'https://core.dhakaregency.com/folders/weekend-buffet-offer/files/GR-FUSION-BUFFET_1787640248435.jpg',
  },
]

export default function Offers() {
  return (
    <>
      <section className="page-hero" style={{ backgroundImage: `url(${BANNER})` }}>
        <h1>Offers</h1>
      </section>
      <section className="py-16">
        <div className="container-max max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {OFFERS.map((o) => (
              <article key={o.name} className="card-room">
                <img src={o.img} alt={o.name} className="w-full aspect-[16/10] object-cover" />
                <div className="p-6 flex items-center justify-between gap-4">
                  <h3 className="text-navy text-lg font-semibold">{o.name}</h3>
                  <Link to="/book" className="btn-navy !py-2 !px-4 !text-sm">
                    Book
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
