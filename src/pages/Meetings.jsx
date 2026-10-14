const BANNER =
  'https://core.dhakaregency.com/folders/hero-banner/files/events-web-p_1717831482530.webp'

const HALLS = [
  {
    name: 'Celebration Hall',
    img: 'https://core.dhakaregency.com/folders/celebration-hall-gallery/files/Celebration-Hall-(1)_1719829818046.webp',
  },
  {
    name: 'Grand Summit 1',
    img: 'https://core.dhakaregency.com/folders/grand-summit-1-gallery/files/Grand-Summit-1-(1)-2_1719717739352.webp',
  },
  {
    name: 'Grand Summit 2',
    img: 'https://core.dhakaregency.com/folders/grand-summit-1-gallery/files/Grand-Summit-1-(2)-1_1719717750238.webp',
  },
  {
    name: 'Grand Summit 3',
    img: 'https://core.dhakaregency.com/folders/grand-summit-1-gallery/files/Grand-Summit-1-(3)-1_1719717760807.webp',
  },
]

export default function Meetings() {
  return (
    <>
      <section className="page-hero" style={{ backgroundImage: `url(${BANNER})` }}>
        <h1>Meetings &amp; Events</h1>
      </section>
      <section className="py-16">
        <div className="container-max">
          <p className="text-center text-muted max-w-2xl mx-auto mb-12">
            Host conferences, weddings and celebrations in our versatile halls.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {HALLS.map((h) => (
              <article key={h.name} className="card-room">
                <img src={h.img} alt={h.name} className="w-full aspect-[16/10] object-cover" />
                <div className="p-5">
                  <h3 className="text-navy text-lg font-semibold">{h.name}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
