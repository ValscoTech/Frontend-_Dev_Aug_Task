import Pencil from '../../assets/guywithpencil.svg'
import DownRightArrow from "../../assets/arrowdownright.svg"

const Hero = () => {

    return (
        <section className="text-light bg-black text-center py-5">
            <div className="container" style={{ fontFamily: "ClashDisplayVariable" }}>
                <h1 className="display-4">Want to earn some <b style={{ fontWeight: "bold", color: "yellow" }}>Side hustle</b> from all that <b style={{ fontWeight: "bold", color: "yellow" }}>Hardwork</b> you do in making <b style={{ fontWeight: "bold", color: "yellow" }}>Notes</b>?</h1>
                <a href='#' target='_blank'><button id='hero-button' className="hero-button btn btn-lg btn-primary mt-4" style={{ borderRadius: "15px", backgroundColor: "#A883C4" }}><img src={DownRightArrow} style={{ height: "2.5rem", marginRight: "5px" }} />RENT NOTES</button></a>
            </div>
            <div className="mt-5">
                <img src={Pencil} alt="Person with Pencil" className="img-fluid" />
            </div>
        </section>
    );
};

export default Hero;