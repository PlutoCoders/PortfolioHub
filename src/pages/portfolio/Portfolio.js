import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

export default function Portfolio({logo, projects}) {
    console.log(`Projects`, projects);
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
                    <div className={`projects`}>
                        <div className={`project flex alignCenter justifyCenter flexColumn`}>
                            <h3>Project 1</h3>
                            <p>This HTML file is a template. If you open it directly in the browser, you will see an empty page.</p>
                        </div>
                        <div className={`project flex alignCenter justifyCenter flexColumn`}>
                            <h3>Project 2</h3>
                            <p>This HTML file is a template. If you open it directly in the browser, you will see an empty page.</p>
                        </div>
                        <div className={`project flex alignCenter justifyCenter flexColumn`}>
                            <h3>Project 3</h3>
                            <p>This HTML file is a template. If you open it directly in the browser, you will see an empty page.</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}