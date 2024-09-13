import Image from '../../assets/image.png';
import DownRightArrow from "../../assets/arrowdownright.svg";

const SearchNotes = () => {
  return (
    <section className="container bg-light text-dark py-5 mt-5 mb-5" style={{ fontFamily: "ClashDisplayVariable", borderRadius: "20px" }}>
      <div className="mx-5">
        <h2 style={{ fontSize: "3rem", fontWeight: "bold" }}>Search Notes</h2>
        <div className="row mt-4 align-items-center">

          <div className="col-lg-6">
            <div className="mb-4">
              <label className="form-label">Price Range</label>
              <div className="d-flex">
                <input type="number" className="form-control me-2" placeholder="Min" />
                <input type="number" className="form-control" placeholder="Max" />
              </div>
            </div>
            
            <div className="mb-4">
              <label className="form-label">Note Type</label>
              <select className="form-select">
                <option>Class Notes</option>
                <option>Lecture Notes</option>
              </select>
            </div>

            <button
              className="btn btn-lg btn-primary mt-4"
              style={{ borderRadius: "15px", backgroundColor: "#A883C4", color: "white", fontWeight: "bold" }}
            >
              <img src={DownRightArrow} style={{ height: "2.5rem", marginRight: "5px" }} alt="Arrow Icon" />
               Search Notes
            </button>
          </div>

          <div className="col-lg-6 text-center text-lg-end mt-4 mt-lg-0">
            <img src={Image} style={{ height: '25rem', width: '25rem' }} alt="Notes Illustration" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchNotes;