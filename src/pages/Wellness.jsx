const BANNER =
  'https://core.dhakaregency.com/folders/hero-banner/files/wellness-banner-web-p_1717831250448.webp'

const ITEMS = [
  {
    name: 'DR Fitness',
    img: 'https://core.dhakaregency.com/folders/dr-fitness/files/Image_1717741545843.png',
    desc: 'Fully equipped gym for guests.',
  },
  {
    name: 'Juvnex Spa',
    img: 'https://core.dhakaregency.com/folders/juvnex-spa/files/J-spa-Image_1717740510245.png',
    desc: 'Relaxing treatments and therapies.',
  },
  {
    name: 'Swimming Pool',
    img: 'https://core.dhakaregency.com/folders/swimming-pool/files/image_1717749455131.png',
    desc: 'Outdoor pool for a refreshing dip.',
  },
]

export default function Wellness() {
  return (
    <>
      <section className="page-hero" style={{ backgroundImage: `url(${BANNER})` }}>
        <h1>Wellness</h1>
      </section>
      <section className="py-16">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ITEMS.map((item) => (
              <article key={item.name} className="card-room">
                <img src={item.img} alt={item.name} className="w-full aspect-[4/3] object-cover" />
                <div className="p-6">
                  <h3 className="text-navy text-xl font-semibold mb-2">{item.name}</h3>
                  <p className="text-muted text-sm">{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
