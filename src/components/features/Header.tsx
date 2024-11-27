import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { Link as LinkScroll } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

export const Header = () => {
    const [hasScrolled, setHasScrolled] = useState(false);
    const [isOpened, setIsOpened] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 32);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const NavLink = ({ title }: { title: string }) => (
        <LinkScroll
            onClick={() => setIsOpened(false)}
            to={title}
            smooth={true}
            offset={-150}
            spy
            duration={500}
            activeClass="nav-active"
            className=" base-bold text-p4 uppercase  transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5"
        >
            {title}
        </LinkScroll>
    );
    return (
        <header
            className={clsx(
                'fixed top-0 left-0 z-50 w-full py-10 transition-all duration-500 max-lg:py-4',
                hasScrolled && 'py-2 bg-black-100 backdrop-blur-[8px]'
            )}
        >
            <div className="container flex h-14 items-center max-lg:px-5">
                <a className="lg:hidden flex-1 cursor-pointer z-2">
                    <img
                        src="/src/assets/img/saniverse.png"
                        width={60}
                        height={55}
                        alt="logo"
                    />
                </a>
                <div
                    className={clsx(
                        'w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0',
                        isOpened
                            ? 'max-lg:opacity-100'
                            : 'max-lg:pointer-events-none'
                    )}
                >
                    <div className="w-full max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4 ">
                        <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
                            <ul className="flex max-lg:flex max-lg:flex-col max-lg:items-center max-lg:px-12">
                                <li className="nav-li max-lg:flex max-lg:flex-col max-lg:items-center max-lg:space-y-2">
                                    <NavLink title="home" />
                                    <div className="dot" />
                                    <NavLink title="features" />
                                </li>
                                <li className="nav-logo">
                                    <LinkScroll
                                        to="hero"
                                        offset={-100}
                                        smooth={true}
                                        duration={500}
                                        spy
                                        className={clsx(
                                            'max-lg:hidden transition-transform duration-500 cursor-pointer'
                                        )}
                                    >
                                        <img
                                            src="/src/assets/img/saniverse.png"
                                            alt="logo"
                                            width={80}
                                            height={55}
                                        />
                                    </LinkScroll>
                                </li>
                                <li className="nav-li max-lg:flex max-lg:flex-col max-lg:items-center max-lg:space-y-2">
                                    <NavLink title="blog" />
                                    <div className="dot" />
                                    <NavLink title="faq" />
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <button
                    className="lg:hidden z-2 w-10 h-10 border-2 border-s4/25 rounded-full flex justify-center items-center hover:text-p1 transition-colors duration-300"
                    onClick={() => setIsOpened((prevState) => !prevState)}
                    aria-label={isOpened ? 'Opec menu' : 'Close menu'}
                >
                    <div className="relative w-5 h-5">
                        <AnimatePresence initial={false}>
                            {isOpened ? (
                                <motion.div
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute inset-0 flex justify-center items-center"
                                >
                                    <FiX className="w-full h-full text-current" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute inset-0 flex justify-center items-center"
                                >
                                    <FiMenu className="w-full h-full text-current" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </button>
            </div>
        </header>
    );
};
