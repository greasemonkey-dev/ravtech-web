import Home from './pages/Home';
import AccelerateStartups from './pages/AccelerateStartups';
import Services from './pages/Services';
import Solutions from './pages/Solutions';
import Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "AccelerateStartups": AccelerateStartups,
    "Services": Services,
    "Solutions": Solutions,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: Layout,
};