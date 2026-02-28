import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import SiteFooter from "./sections/SiteFooter";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./PageTransition";
import BackToTop from "./BackToTop";

const MainLayout = () => {
    const location = useLocation();

    return (
        <>
            <Navbar />
            <AnimatePresence mode="wait">
                <PageTransition key={location.pathname} className="min-h-screen">
                    <Outlet />
                </PageTransition>
            </AnimatePresence>
            <SiteFooter />
            <BackToTop />
        </>
    );
};

export default MainLayout;
