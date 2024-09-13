import Notes from '../../assets/notes.jpg';

const NotesSection = () => {
    const notes = [
        { title: 'Computation of Mathematics', course: 'CSE 2005', module: 8, school: 'SCOPE' },
        { title: 'Computation of Mathematics', course: 'CSE 2005', module: 8, school: 'SCOPE' },
        { title: 'Computation of Mathematics', course: 'CSE 2005', module: 8, school: 'SCOPE' },
        { title: 'Computation of Mathematics', course: 'CSE 2005', module: 8, school: 'SCOPE' },
    ];

    return (
        <section className="bg-black text-light py-5" style={{ fontFamily: 'ClashDisplayVariable' }}>
            <div className="container">
                <div className="row">
                    {notes.map((note, index) => (
                        <div key={index} className="col-md-3 col-sm-6 mb-4">
                            <div className="card bg-light text-dark h-100" style={{ borderRadius: '20px', padding: '20px' }}>
                                <div className="card-body text-center">
                                    <p className="card-text" style={{ fontSize: '0.9rem', color: '#707070' }}>
                                        {note.course} <span style={{ color: "black", backgroundColor: '#A883C4', padding: '2px 8px', borderRadius: '5px', marginLeft: '10px' }}>{note.school}</span>
                                    </p>
                                    <h5 className="card-title" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                                        {note.title}
                                    </h5>
                                    <p style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#707070' }}>
                                        Modules Covered <span style={{ fontSize: '1.1rem', color: 'black' }}>{note.module}</span>
                                    </p>
                                    <img
                                        src={Notes}
                                        alt="Notes"
                                        className="img-fluid mt-3"
                                        style={{
                                            border: '1px solid #DDD',
                                            borderRadius: '10px',
                                            padding: '5px',
                                            width: '100%',
                                            height: 'auto',
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NotesSection;