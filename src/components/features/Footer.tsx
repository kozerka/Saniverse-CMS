import { socials } from '../../data';

const links = [
    { id: 'blog', title: 'Blog', url: '/blog' },
    { id: 'privacy', title: 'Privacy Policy', url: '/privacy' },
    { id: 'terms', title: 'Terms of Use', url: '/terms' },
    { id: 'contact', title: 'Contact Us', url: '/contact' },
];

export const Footer = () => {
    return (
        <footer>
            <div className="container py-10">
                <div className="flex w-full justify-center items-center flex-col md:flex-row">
                    <div className="flex items-center  justify-center flex-col md:flex-row mb-6 md:mb-0 md:ml-auto">
                        {links.map(({ id, title, url }) => (
                            <a
                                key={id}
                                href={url}
                                className="relative text-p5 mx-4 cursor-pointer transition-all duration-500 hover:text-p1 "
                            >
                                {title}
                            </a>
                        ))}
                    </div>

                    <ul className="flex flex-1 justify-center gap-3 mt-4 md:mt-0 md:justify-end">
                        {socials.map(({ id, url, icon, title }) => (
                            <li key={id}>
                                <a
                                    href={url}
                                    className="social-icon flex items-center justify-center transition-all duration-500 hover:opacity-80"
                                    title={title}
                                >
                                    <span className="text-xl hover:text-p1 transition-colors duration-300">
                                        {icon}
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
};
