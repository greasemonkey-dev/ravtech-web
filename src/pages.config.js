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
import RavDataDashboard from './pages/RavDataDashboard';
import RavDataHome from './pages/RavDataHome';
import RavDataReconciliation from './pages/RavDataReconciliation';
import RavDataOcr from './pages/RavDataOcr';
import RavDataProviders from './pages/RavDataProviders';
import RavDataFaq from './pages/RavDataFaq';
import RavDataBlog from './pages/RavDataBlog';
import About from './pages/About';
import ContentPolicy from './pages/ContentPolicy';
import AiManufacturingHeCluster from './pages/AiManufacturingHeCluster';
import AiLogisticsHeCluster from './pages/AiLogisticsHeCluster';
import AiUseCasesIsrael from './pages/AiUseCasesIsrael';
import AiIntegrationFramework from './pages/AiIntegrationFramework';
import FaqAiManufacturing from './pages/FaqAiManufacturing';
import SupplyChainAutomation from './pages/SupplyChainAutomation';
import ErpMethodology from './pages/ErpMethodology';
import RouteOptimization from './pages/RouteOptimization';
import DemandForecasting from './pages/DemandForecasting';
import AiLogistics from './pages/AiLogistics';
import AiLogisticsHe from './pages/AiLogisticsHe';
import AiManufacturing from './pages/AiManufacturing';
import AiManufacturingHe from './pages/AiManufacturingHe';
import AccelerateStartups from './pages/AccelerateStartups';
import Careers from './pages/Careers';
import CaseStudies from './pages/CaseStudies';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Solutions from './pages/Solutions';
import TermsOfUse from './pages/TermsOfUse';
import SupplyChainIsrael from './pages/SupplyChainIsrael';
import ErpAiIntegration from './pages/ErpAiIntegration';
import PredictiveMaintenance from './pages/PredictiveMaintenance';
import QualityControlAi from './pages/QualityControlAi';
import RouteOptimizationGuide from './pages/RouteOptimizationGuide';
import WarehouseAutomation from './pages/WarehouseAutomation';
import RealTimeTracking from './pages/RealTimeTracking';
import RavDocAi from './pages/RavDocAi';
import Editorial from './pages/Editorial';
import __Layout from './Layout.jsx';


export const PAGES = {
    "About": About,
    "ai-logistics": AiLogistics,
    "ai-logistics-he": AiLogisticsHe,
    "ai-manufacturing": AiManufacturing,
    "ai-manufacturing-he": AiManufacturingHe,
    "AccelerateStartups": AccelerateStartups,
    "Careers": Careers,
    "CaseStudies": CaseStudies,
    "Contact": Contact,
    "Home": Home,
    "Projects": Projects,
    "Services": Services,
    "Solutions": Solutions,
    "TermsOfUse": TermsOfUse,
    "ContentPolicy": ContentPolicy,
    "ai-manufacturing/supply-chain-automation": SupplyChainAutomation,
    "ai-manufacturing/erp-methodology": ErpMethodology,
    "ai-logistics/route-optimization": RouteOptimization,
    "ai-logistics/demand-forecasting-methodology": DemandForecasting,
    "ai-manufacturing/supply-chain-israel": SupplyChainIsrael,
    "ai-manufacturing/erp-ai-integration": ErpAiIntegration,
    "ai-manufacturing/predictive-maintenance": PredictiveMaintenance,
    "ai-manufacturing/quality-control-ai": QualityControlAi,
    "ai-logistics/route-optimization-guide": RouteOptimizationGuide,
    "ai-logistics/warehouse-automation": WarehouseAutomation,
    "ai-logistics/real-time-tracking": RealTimeTracking,
    "ai-manufacturing-he/cluster": AiManufacturingHeCluster,
    "ai-logistics-he/cluster": AiLogisticsHeCluster,
    "blog/ai-manufacturing-use-cases-israel-2026": AiUseCasesIsrael,
    "ai-integration-framework": AiIntegrationFramework,
    "faq/ai-manufacturing-logistics": FaqAiManufacturing,
    // RavData cluster
    "ravdata": RavDataHome,
    "ravdata/invoice-reconciliation": RavDataReconciliation,
    "ravdata/delivery-note-ocr": RavDataOcr,
    "ravdata/provider-management": RavDataProviders,
    "faq/small-fleet-management-israel": RavDataFaq,
    "blog/logistics-management-software-israel-2026": RavDataBlog,
    "ravdata/logistics-dashboard": RavDataDashboard,
    "ravdoc-ai": RavDocAi,
    "editorial": Editorial,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};