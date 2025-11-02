import Home from './pages/Home';
import AccelerateStartups from './pages/AccelerateStartups';
import Services from './pages/Services';
import Solutions from './pages/Solutions';
import Projects from './pages/Projects';
import CaseStudies from './pages/CaseStudies';
import Careers from './pages/Careers';
import About from './pages/About';
import Contact from './pages/Contact';
import TeamMemberDetail from './pages/TeamMemberDetail';
import Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "AccelerateStartups": AccelerateStartups,
    "Services": Services,
    "Solutions": Solutions,
    "Projects": Projects,
    "CaseStudies": CaseStudies,
    "Careers": Careers,
    "About": About,
    "Contact": Contact,
    "TeamMemberDetail": TeamMemberDetail,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: Layout,
};