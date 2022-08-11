import Link from 'next/link'

export default function Navigation(){
    return (
        <>
            {/* navigation bar */}


            <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link
                href="/"
                >
                 <a className="navbar-brand" >Matthews Portfolio v.3</a>   
                </Link>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link
                    href='/'
                    > 
                        <a className="nav-link">Home</a>
                    </Link>
                    
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" type='email' href="mailto:jobs.matthew@protonmail.com">Email Me</a>
                    </li>

                    {/* add nested dropdown menu to showcase WEBSITES that I have built */}
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Projects
                        </a>
                        <ul className="dropdown-menu">

                        {/* link to github: drumkit */}
                        <Link
                        href="https://psychologyandfreedom.github.io/drum-kit/"
                        >
                            <li><a className="dropdown-item" >Drum Kit</a></li>
                        </Link> 
                         {/* link to github: simon says */}
                        <Link
                        href="https://psychologyandfreedom.github.io/simon-says-game/"
                        >
                            <li><a className="dropdown-item" >Simon Says</a></li>
                        </Link>

                         {/* link to: calculator projects page */}
                         <Link
                        href="/projects/js-calculator"
                        >
                            <li><a className="dropdown-item" >JavaScript Calculator(coming soon)</a></li>
                        </Link>
                        {/* link to blog project with mongodb database */}
                         <Link
                        href="/projects/blog"
                        >
                            <li><a className="dropdown-item" >Blog With MongoDB Database(coming soon)</a></li>
                            
                        </Link>
                        
                        {/* unity/c# projects */}
                        
                        
                        </ul>
                    </li>
                    
                </ul>
                
                </div>
            </div>
            </nav>
            
            
        </>
    )
}