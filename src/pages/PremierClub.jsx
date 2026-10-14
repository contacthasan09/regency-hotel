const BANNER =
  'https://core.dhakaregency.com/folders/hero-banner/files/Premier-Club_1717832047605.webp'

export default function PremierClub() {
  return (
    <>
      <section className="page-hero" style={{ backgroundImage: `url(${BANNER})` }}>
        <h1>Premier Club</h1>
      </section>
      <section className="py-16 bg-navyMid text-white">
        <div className="container-max max-w-3xl text-center">
          <h2 className="text-3xl font-semibold mb-4">Elevated Membership</h2>
          <p className="text-white/80 leading-relaxed mb-8">
            Enjoy exclusive lounge access, preferential rates, and curated privileges designed for
            frequent guests of Dhaka Regency.
          </p>
          <a href="/book" className="btn-white">
            Learn More
          </a>
        </div>
      </section>
      <section className="py-16">
        <div className="container-max grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            'https://dhakaregency.com/assets/images/regency/image-1.jpeg',
            'https://dhakaregency.com/assets/images/regency/image-2.jpeg',
            'https://dhakaregency.com/assets/images/regency/image-3.jpeg',
          ].map((src, i) => (
            <img key={i} src={src} alt="" className="w-full aspect-[4/3] object-cover rounded-[12px] shadow-soft" />
          ))}
        </div>
      </section>
    </>
  )
}
