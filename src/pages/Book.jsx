export default function Book() {
  return (
    <>
      <section className="page-hero bg-navy" style={{ minHeight: 280 }}>
        <h1>Book Your Stay</h1>
      </section>
      <section className="py-16 bg-mist">
        <div className="container-max max-w-xl mx-auto">
          <form
            className="bg-white p-8 rounded-card shadow-soft space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <h2 className="section-title text-2xl text-center">Check Availability</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-muted mb-1">Check-in</label>
                <input type="date" className="input-field" required />
              </div>
              <div>
                <label className="block text-sm text-muted mb-1">Check-out</label>
                <input type="date" className="input-field" required />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-muted mb-1">Adults</label>
                <input type="number" min="1" defaultValue="2" className="input-field" />
              </div>
              <div>
                <label className="block text-sm text-muted mb-1">Children</label>
                <input type="number" min="0" defaultValue="0" className="input-field" />
              </div>
            </div>
            <input type="text" className="input-field" placeholder="Promo code (optional)" />
            <button type="submit" className="btn-navy w-full">
              Search Rooms
            </button>
            <p className="text-center text-xs text-muted pt-2">
              Inspired by the official booking flow · Dhaka Regency
            </p>
          </form>
        </div>
      </section>
    </>
  )
}
