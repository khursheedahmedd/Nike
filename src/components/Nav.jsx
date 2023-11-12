import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { useState, useEffect } from 'react';

const Nav = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
        };

        checkIsMobile();

        const handleResize = () => {
            checkIsMobile();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <header className="padding-x py-8 absolute z-10 w-full">
            <nav className="flex justify-between items-center max-container">
                <a href="/">
                    <img
                        src={headerLogo}
                        alt="logo"
                        width={130}
                        height={29}
                    />
                </a>
                {isMobile ? (
                    <div className="max-lg:hidden">
                        <img
                            src={hamburger}
                            alt="hamburger"
                            width={25}
                            height={25}
                            onClick={toggleMobileMenu}
                            style={{ cursor: 'pointer' }}
                        />
                    </div>
                ) : (
                    <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                        {navLinks.map((item) => (
                            <li key={item.label} >
                                <a
                                    href={item.href}
                                    className="font-monts errat leading-normal text-lg text-slate-gray"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
                {isMobile && (
                    <ul className={`flex-1 flex justify-center items-center gap-16 max-lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                        {navLinks.map((item) => (
                            <li key={item.label} >
                                <a
                                    href={item.href}
                                    className="font-monts errat leading-normal text-lg text-slate-gray"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </nav>
        </header>
    );
}

export default Nav;
