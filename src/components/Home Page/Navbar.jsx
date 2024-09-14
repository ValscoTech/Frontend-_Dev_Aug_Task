import { useState } from 'react';
import Logo from '../../assets/logo.png';
import Search from '../../assets/search_icon.svg';
import Profile from '../../assets/profile.svg';

const Navbar = () => {
    // State to handle search input visibility
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    // Toggle search input visibility
    const toggleSearchInput = () => {
        setIsSearchVisible(!isSearchVisible);
    };

    // Handle input change
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-black mx-4" style={{ fontFamily: "ClashDisplayVariable" }}>
            <div className="container-fluid">
                <a href='#'><img className='m-0 p-0' src={Logo} alt='noteswap' style={{ height: '7rem', width: '8rem' }} /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active mx-3" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mx-3" href="#notes">Notes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mx-3" href="#blogs">Blogs</a>
                        </li>
                        <li className="nav-item d-flex align-items-center">
                            <a href="#" onClick={toggleSearchInput}>
                                <img src={Search} alt="Search button" style={{ width: '25px', marginTop: '0.5rem', marginLeft: '2rem', marginRight: '0.5rem', marginBottom: "0.75rem" }} />
                            </a>
                            {isSearchVisible && (
                                <input
                                    type="text"
                                    className="form-control"
                                    value={searchQuery}
                                    onChange={handleSearchChange}
                                    placeholder="Search..."
                                    style={{
                                        width: '200px',
                                        marginLeft: '0.5rem',
                                        borderRadius: '15px',
                                        border: '1px solid #ccc',
                                        padding: '0.5rem',
                                    }}
                                />
                            )}
                        </li>
                        {/* Profile Icon */}
                        <li className="nav-item">
                            <a href="#"><img src={Profile} alt="Profile button" style={{ width: '25px', marginTop: '0.5rem', marginLeft: '2rem', marginRight: '2rem' }} /></a>
                        </li>
                        <li className="nav-item">
                            <button className="btn offer-btn ms-2 mx-2" style={{ width: '8rem', borderRadius: "15px" }}>Offer</button>
                        </li>
                        <li className="nav-item">
                            <button className="btn rent-btn ms-2 mx-2" style={{ width: '8rem', borderRadius: "15px" }}>Rent</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;