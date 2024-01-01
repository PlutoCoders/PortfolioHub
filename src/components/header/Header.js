import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Header() {
    let [pageName, setPageName] = useState(window.location.pathname);

    // Runs anytime THIS component (that the use effect is inside of) is loaded or unloaded.
    // To utilize the unloaded effect, you need to have a return function in the useEffect.
    useEffect(() => {
        if (pageName === undefined) {
            setPageName(window.location.pathname);
        }
    }, [pageName])

    return (
        <header className={`header flex alignCenter justifySpaceBetween`}>
            <div className={`column headerColumn columnLeft flex alignCenter gap5`}>
                {/* You can still use class/id names inside the link tag because the React Link tag automatically includes an a tag. */}
                <Link className={`flex alignCenter gap5 mainColorLink`} to={`/`}>
                    <h1>Portfolio Hub</h1>
                    <span style={{color: `white`}}>- by Plutocoders</span>
                </Link>
                {/* <a className={`flex alignCenter gap5 mainColorLink`} href={`/`}>
                    <h1>Portfolio Hub</h1>
                    <span style={{color: `white`}}>- by Plutocoders</span>
                </a> */}
            </div>
            <div className={`column headerColumn columnRight`}>
                <nav>
                    <ul className={`navigationList flex gap15`}>
                        {/* The a href tags won't work with a deployed version. React router DOM reccomends using their custom link component which will wrap the a tags in the link component. */}
                        {/* Newer versions of React Router DOM dont need an <a> tag inside the <Link> anymore */}
                        {pageName !== `/` && <li>
                            <Link to={`/`}>Home</Link>
                        </li>}
                        <li>
                            <Link to={`/about`}>About Me</Link>
                        </li>
                        <li>
                            <Link to={`/portfolio`}>Portfolio</Link>
                        </li>
                        <li>
                            <Link to={`/resume`}>Resume</Link>
                        </li>
                        <li>
                            <Link to={`/contact`}>Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}