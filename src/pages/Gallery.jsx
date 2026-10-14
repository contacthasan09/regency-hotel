const BANNER =
  'https://core.dhakaregency.com/folders/hero-banner/files/Group-1171275075-(1)_1717833183851.webp'

const IMAGES = [
  'https://core.dhakaregency.com/folders/regency-premium-twin/files/Premium-Twin_1717660918053.png',
  'https://core.dhakaregency.com/folders/standard-room-gallery/files/Standard-(3)-(1)-1_1718024107137.png',
  'https://core.dhakaregency.com/folders/luxury-deluxe-gallery/files/LUXURY-DELUXE-(2)-1_1718038757697.png',
  'https://core.dhakaregency.com/folders/dinning/files/Grandoise_1719138866933.png',
  'https://core.dhakaregency.com/folders/swimming-pool/files/image_1717749455131.png',
  'https://core.dhakaregency.com/folders/celebration-hall-gallery/files/Celebration-Hall-(1)_1719829818046.webp',
]

export default function Gallery() {
  return (
    <>
      <section className="page-hero" style={{ backgroundImage: `url(${BANNER})` }}>
        <h1>Gallery</h1>
      </section>
      <section className="py-16">
        <div className="container-max grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {IMAGES.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              className="w-full aspect-[4/3] object-cover rounded-[8px] shadow-sm hover:opacity-95 transition-opacity"
              loading="lazy"
            />
          ))}
        </div>
      </section>
    </>
  )
}
