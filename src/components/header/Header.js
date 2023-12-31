import { useState } from 'react';

export default function Header() {
    let [pageName, setPageName] = useState(window.location.pathname);

    return (
        <header className={`header flex alignCenter justifySpaceBetween`}>
            <div className={`column headerColumn columnLeft flex alignCenter gap5`}>
                <a className={`flex alignCenter gap5 mainColorLink`} href={`/`}>
                    <h1>Portfolio Hub</h1>
                    <span style={{color: `white`}}>- by Plutocoders</span>
                </a>
            </div>
            <div className={`column headerColumn columnRight`}>
                <nav>
                    <ul className={`navigationList flex gap15`}>
                        {pageName != `/` && <li><a href={`/`}>Home</a></li>}
                        <li><a href={`/about`}>About Me</a></li>
                        <li><a href={`/portfolio`}>Portfolio</a></li>
                        <li><a href={`/resume`}>Resume</a></li>
                        <li><a href={`/contact`}>Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}