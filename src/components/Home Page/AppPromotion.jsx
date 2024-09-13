import Phone from '../../assets/Phone.png';
import DownRightArrow from "../../assets/arrowdownright.svg";

const AppPromotion = () => {
    return (
        <div className='container py-5' style={{ marginTop: "5rem", marginBottom: "5rem" }}>
            <section 
                className="bg-white text-center py-5 d-flex flex-column flex-lg-row align-items-center" 
                style={{ fontFamily: "ClashDisplayVariable", borderRadius: "20px" }}
            >
                <div className="text-container col-lg-6 text-lg-start mx-5" style={{ paddingRight: "2rem" }}>
                    <h2 className='text-black' style={{ fontSize: "3rem", marginTop: "2rem" }}>
                        Have you Tried our App? Notes on the GO
                    </h2>
                    <button 
                        className="btn btn-lg btn-primary mt-4" 
                        style={{ borderRadius: "15px", backgroundColor: "#A883C4" }}
                    >
                        <img 
                            src={DownRightArrow} 
                            style={{ height: "2.5rem", marginRight: "5px" }} 
                            alt="Arrow Icon"
                        /> 
                        Download RentSwap
                    </button>
                </div>
                <div className='col-lg-6 text-center'>
                    <img 
                        src={Phone} 
                        alt="Phone App" 
                        className="img-fluid mt-4" 
                        style={{ maxWidth: "100%", height: "auto" }}
                    />
                </div>
            </section>
        </div>
    );
};

export default AppPromotion;
