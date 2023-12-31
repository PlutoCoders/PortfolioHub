import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Project from '../../components/project/Project';

export default function Portfolio({logo, projects}) {
    return (
        <>
            <Header />
            <main>
                <section className={`plutoBGSection`}>
                    <div className={`containerWithSpinningLogo`}>
                    <img src={logo} className="App-logo" alt="logo" />
                    <p style={{marginTop: 35}}>Portfolio</p>
                    </div>
                </section>
                <section id={`portfolio`} className={`portfolioContentSection flex alignCenter justifyCenter flexColumn`} style={{padding: 15}}>
                    <h2>Projects</h2>
                    <div className={`projects flex justifySpaceBetween gap15`}>
                        {projects && projects.length > 0 ? projects.map((project, projectIndex) => {
                            return <Project key={projectIndex} project={project} />
                        }) : <div className={`project flex alignCenter justifyCenter flexColumn w100`}>No Projects Found</div>}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}