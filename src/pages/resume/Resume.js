import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

export default function Resume({logo}) {
    return (
        <>
            <Header />
            <main>
                <section className={`plutoBGSection`}>
                    <div className={`containerWithSpinningLogo`}>
                    <img src={logo} className="App-logo" alt="logo" />
                    <p style={{marginTop: 35}}>Resume</p>
                    </div>
                </section>
                <section id={`resume`} className={`resumeContentSection flex alignCenter justifyCenter flexColumn`} style={{padding: 15}}>
                    <h2>Resume</h2>
                    {/* set target={'_blank'} to open a link in a new tab*/}
                    {/* use download attribute to initiate a download of the connected asset. (pdf) */}
                    <a target={`_blank`} className={`topic`} style={{padding: `5px 15px`}} href={`./Resume.pdf`} download={`resume.pdf`}>Click to view and Download Resume</a>
                </section>
            </main>
            <Footer />
        </>
    )
}