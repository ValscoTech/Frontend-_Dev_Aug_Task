// Bootstrap

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


// Tailwindcss

// import Pencil from '../../assets/guywithpencil.svg';
// import DownRightArrow from "../../assets/arrowdownright.svg";

// const Hero = () => {
//     return (
//         <section className="container bg-black text-white text-center flex items-center h-screen w-full">
//             <div className="w-full px-8 m-5" style={{ fontFamily: "ClashDisplayVariable" }}>
//                 <div className="flex flex-col md:flex-row items-center justify-between h-full">
//                     {/* Left Column - Text and Button */}
//                     <div className="md:w-1/2 text-left">
//                         <h1 className="display-4 md:display-3 font-bold leading-tight my-4" >
//                             Want to earn some <span style={{ fontWeight: "bold", color: "yellow" }} >Side hustle</span> from all that <span style={{ fontWeight: "bold", color: "yellow" }}>Hardwork</span> you do in making <span style={{ fontWeight: "bold", color: "yellow" }}>Notes</span>?
//                         </h1>
//                         <button className="mt-6 text-white text-lg font-semibold px-6 py-3 rounded-lg flex items-center" style={{ backgroundColor: "#A883C4", borderRadius: "15px" }}>
//                             <img src={DownRightArrow} className="h-8 mr-3" alt="Down Right Arrow" style={{ height: "2.5rem" }} />
//                             RENT NOTES
//                         </button>
//                     </div>

//                     {/* Right Column - Image */}
//                     <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center my-3">
//                         <img src={Pencil} alt="Person with Pencil" className="max-w-full h-auto" />
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Hero;