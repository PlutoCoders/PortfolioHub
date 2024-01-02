import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

export default function Home({logo}) {
    return (
        <>
            <Header />
            <main>
                <section className={`plutoBGSection`}>
                    <div className={`containerWithSpinningLogo`}>
                    <img src={logo} className="App-logo" alt="logo" />
                    <p style={{marginTop: 35}}>Portfolio Hub</p>
                    </div>
                </section>
                <section id={`aboutMe`} className={`aboutMeSection flex alignCenter justifyCenter`}>
                    Click the links in the nav bar above to traverse the website! Featured portfolio projects will be added here later.
                </section>
            </main>
            <Footer />
        </>
    )
}