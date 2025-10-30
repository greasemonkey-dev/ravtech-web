import Home from './pages/Home';
import AccelerateStartups from './pages/AccelerateStartups';
import Services from './pages/Services';
import Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "AccelerateStartups": AccelerateStartups,
    "Services": Services,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: Layout,
};