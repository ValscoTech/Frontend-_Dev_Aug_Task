import Navbar from './Navbar';
import Hero from './Hero';
import AppPromotion from './AppPromotion';
import NotesSection from './NotesSection';
import SearchNotes from './SearchNotes';
import Footer from './Footer';

const Home = () => {
    return (
        <div className="bg-black">
            <Navbar />
            <Hero />
            <AppPromotion />
            <NotesSection />
            <SearchNotes />
            <Footer />
        </div>
    )
}

export default Home