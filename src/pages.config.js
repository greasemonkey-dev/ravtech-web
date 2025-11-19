import Home from './pages/Home';
import AccelerateStartups from './pages/AccelerateStartups';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Careers from './pages/Careers';
import About from './pages/About';
import Contact from './pages/Contact';
import TermsOfUse from './pages/TermsOfUse';
import Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "AccelerateStartups": AccelerateStartups,
    "Services": Services,
    "Projects": Projects,
    "Careers": Careers,
    "About": About,
    "Contact": Contact,
    "TermsOfUse": TermsOfUse,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: Layout,
};