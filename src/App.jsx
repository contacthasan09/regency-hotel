import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import Dining from './pages/Dining'
import Meetings from './pages/Meetings'
import Wellness from './pages/Wellness'
import PremierClub from './pages/PremierClub'
import Gallery from './pages/Gallery'
import Offers from './pages/Offers'
import Book from './pages/Book'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="rooms" element={<Rooms />} />
        <Route path="dining" element={<Dining />} />
        <Route path="meetings" element={<Meetings />} />
        <Route path="wellness" element={<Wellness />} />
        <Route path="premier-club" element={<PremierClub />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="offers" element={<Offers />} />
        <Route path="book" element={<Book />} />
      </Route>
    </Routes>
  )
}
