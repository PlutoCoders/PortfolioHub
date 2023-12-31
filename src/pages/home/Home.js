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
                    About Me
                </section>
            </main>
            <Footer />
        </>
    )
}