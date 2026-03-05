/**
 * pages.config.js - Page routing configuration
 * 
 * This file is AUTO-GENERATED. Do not add imports or modify PAGES manually.
 * Pages are auto-registered when you create files in the ./pages/ folder.
 * 
 * THE ONLY EDITABLE VALUE: mainPage
 * This controls which page is the landing page (shown when users visit the app).
 * 
 * Example file structure:
 * 
 *   import HomePage from './pages/HomePage';
 *   import Dashboard from './pages/Dashboard';
 *   import Settings from './pages/Settings';
 *   
 *   export const PAGES = {
 *       "HomePage": HomePage,
 *       "Dashboard": Dashboard,
 *       "Settings": Settings,
 *   }
 *   
 *   export const pagesConfig = {
 *       mainPage: "HomePage",
 *       Pages: PAGES,
 *   };
 * 
 * Example with Layout (wraps all pages):
 *
 *   import Home from './pages/Home';
 *   import Settings from './pages/Settings';
 *   import __Layout from './Layout.jsx';
 *
 *   export const PAGES = {
 *       "Home": Home,
 *       "Settings": Settings,
 *   }
 *
 *   export const pagesConfig = {
 *       mainPage: "Home",
 *       Pages: PAGES,
 *       Layout: __Layout,
 *   };
 *
 * To change the main page from HomePage to Dashboard, use find_replace:
 *   Old: mainPage: "HomePage",
 *   New: mainPage: "Dashboard",
 *
 * The mainPage value must match a key in the PAGES object exactly.
 */
import About from './pages/About';
import AiLogistics from './pages/AiLogistics';
import AiLogisticsHe from './pages/AiLogisticsHe';
import AiManufacturing from './pages/AiManufacturing';
import AiManufacturingHe from './pages/AiManufacturingHe';
import DegAlert from './pages/DegAlert';
import AccelerateStartups from './pages/AccelerateStartups';
import Careers from './pages/Careers';
import CaseStudies from './pages/CaseStudies';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Solutions from './pages/Solutions';
import TermsOfUse from './pages/TermsOfUse';
import __Layout from './Layout.jsx';


export const PAGES = {
    "About": About,
    "ai-logistics": AiLogistics,
    "ai-logistics-he": AiLogisticsHe,
    "ai-manufacturing": AiManufacturing,
    "ai-manufacturing-he": AiManufacturingHe,
    "case-studies/degalert": DegAlert,
    "AccelerateStartups": AccelerateStartups,
    "Careers": Careers,
    "CaseStudies": CaseStudies,
    "Contact": Contact,
    "Home": Home,
    "Projects": Projects,
    "Services": Services,
    "Solutions": Solutions,
    "TermsOfUse": TermsOfUse,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};