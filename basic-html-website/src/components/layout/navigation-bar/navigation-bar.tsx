import {Link, useLocation} from "@tanstack/react-router";

const navLinks = [
    {to: '/', label: 'Home'},
    {to: '/about', label: 'About'},
    {to: '/projects', label: 'Projects'},
    {to: '/articles', label: 'Articles'},
    {to: '/contact', label: 'Contact'},
]

export const NavigationBar = () => {
    const location = useLocation()
    const isHomePage = location.pathname === '/';
    const isAboutPage = location.pathname === '/about';
    const navClassName = `site-nav ${isAboutPage ? 'on-about-page' : ''}`;
    let visibleLinks;

    if (isHomePage) {
        visibleLinks = navLinks.filter(link => link.to === '/about');
    } else {
        visibleLinks = navLinks.filter(link => link.to !== location.pathname);
    }
    return (
        <nav className={navClassName}>
            {
                visibleLinks.map((link, index) => (
                    <span key={link.to}>
                    <Link key={link.to} to={link.to} className="nav-link">
                        {link.label}
                    </Link>
                        {isAboutPage && index < visibleLinks.length - 1 && (
                            <span className="separator">/</span>
                        )}
                    </span>
                ))
            }
        </nav>)
}