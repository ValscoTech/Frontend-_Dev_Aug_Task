import Twitter from "../../assets/twitter.png"
import Instagram from "../../assets/instagram.png"
import Facebook from "../../assets/facebook.png"

const Footer = () => {
    return (
        <footer className="bg-black text-light py-4 bottom-0" style={{ fontFamily: "ClashDisplayVariable" }}>
            <div className="container">
                <hr />
                <div className="row">
                    <p style={{ fontWeight: "bold", fontSize: "1.5rem" }}>NoteSwap</p>
                    <div className="col-md-6">
                        <p>Social Media</p>
                        <ul className="list-unstyled d-flex">
                            <li><a href="https://twitter.com" target="_blank"><img src={Twitter} alt="Twitter" style={{ width: "1.5rem" }} /></a></li>
                            <li><a href="https://instagram.com" target="_blank" ><img src={Instagram} alt="Instagram" style={{ width: "1.5rem", marginLeft: "1rem" }} /></a></li>
                            <li><a href="https://facebook.com" target="_blank" ><img src={Facebook} alt="Facebook" style={{ width: "1.25rem", marginLeft: "1.3rem" }} /></a></li>
                        </ul>
                        <br />
                        <p>Phone</p>
                        <ul className="list-unstyled">
                            <li><p>+91&nbsp;&nbsp;98861&nbsp;&nbsp;89098</p></li>
                            <li> <p>+91&nbsp;&nbsp;78400&nbsp;&nbsp;99836</p></li>
                        </ul>
                    </div>
                    <div className="col-md-6 text-md-end">
                        <p>Email</p>
                        <p>juridentyi@gmail.com</p>
                        <br />
                        <p>Support</p>
                        <p>Connect@valscotech.com</p>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p>&copy;&nbsp;&nbsp;Copyrights</p>
                    <p>India</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;