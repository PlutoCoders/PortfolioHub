import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

export default function Portfolio({logo}) {
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
                <section id={`aboutMe`} className={`aboutMeContentSection flex alignCenter justifyCenter flexColumn`} style={{padding: 15}}>
                    <h2>Portfolio</h2>
                    <p>
                        This HTML file is a template.
                        If you open it directly in the browser, you will see an empty page.

                        You can add webfonts, meta tags, or analytics to this file.
                        The build step will place the bundled scripts into the tag.

                        To begin the development, run `npm start` or `yarn start`.
                        To create a production bundle, use `npm run build` or `yarn build`.
                    </p>
                </section>
            </main>
            <Footer />
        </>
    )
}