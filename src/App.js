import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import TestimonialPage from "./pages/TestimonialPage";
import DocumentsPage from "./pages/DocumentsPage";
import ApplicationPage from "./pages/ApplicationPage";
import SchoolCalendar from "./pages/SchoolCalendar";
import VirtualTour from "./pages/VirtualTour";
import CAREERPAGE from "./pages/CAREERPAGE";
import MandatoryPublicDisclosure from "./pages/MandatoryPublicDisclosure";
import EventsPage from "./pages/EventsPage";
import OurFounderAndTeachers from "./pages/OurFounderAndTeachers";
import InternalBlogPage from "./pages/InternalBlogPage";
import EventDetailPage from "./pages/EventDetailPage";
import InfrastructureFacilitiesPage from "./pages/InfrastructureFacilitiesPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import HOUSESYSTEMPAGE from "./pages/HOUSESYSTEMPAGE";
import GalleryPage from "./pages/GalleryPage";
import BlogsPage from "./pages/BlogsPage";
import AboutSchoolPage from "./pages/AboutSchoolPage";
import InternalGalleryPage from "./pages/InternalGalleryPage";
import ContactUsPage from "./pages/ContactUsPage";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/documents-page":
        title = "";
        metaDescription = "";
        break;
      case "/application-page":
        title = "";
        metaDescription = "";
        break;
      case "/school-calendar":
        title = "";
        metaDescription = "";
        break;
      case "/virtual-tour":
        title = "";
        metaDescription = "";
        break;
      case "/career-page":
        title = "";
        metaDescription = "";
        break;
      case "/mandatory-public-disclosure":
        title = "";
        metaDescription = "";
        break;
      case "/events-page":
        title = "";
        metaDescription = "";
        break;
      case "/our-founder-and-teachers":
        title = "";
        metaDescription = "";
        break;
      case "/internal-blog-page":
        title = "";
        metaDescription = "";
        break;
      case "/event-detail-page":
        title = "";
        metaDescription = "";
        break;
      case "/infrastructure-facilities-page":
        title = "";
        metaDescription = "";
        break;
      case "/privacy-policy-page":
        title = "";
        metaDescription = "";
        break;
      case "/house-system-page":
        title = "";
        metaDescription = "";
        break;
      case "/gallery-page":
        title = "";
        metaDescription = "";
        break;
      case "/blogs-page":
        title = "";
        metaDescription = "";
        break;
      case "/about-school-page":
        title = "";
        metaDescription = "";
        break;
      case "/internal-gallery-page":
        title = "";
        metaDescription = "";
        break;
      case "/contact-us-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/" element={<TestimonialPage />} />
      <Route path="/documents-page" element={<DocumentsPage />} />
      <Route path="/application-page" element={<ApplicationPage />} />
      <Route path="/school-calendar" element={<SchoolCalendar />} />
      <Route path="/virtual-tour" element={<VirtualTour />} />
      <Route path="/career-page" element={<CAREERPAGE />} />
      <Route
        path="/mandatory-public-disclosure"
        element={<MandatoryPublicDisclosure />}
      />
      <Route path="/events-page" element={<EventsPage />} />
      <Route
        path="/our-founder-and-teachers"
        element={<OurFounderAndTeachers />}
      />
      <Route path="/internal-blog-page" element={<InternalBlogPage />} />
      <Route path="/event-detail-page" element={<EventDetailPage />} />
      <Route
        path="/infrastructure-facilities-page"
        element={<InfrastructureFacilitiesPage />}
      />
      <Route path="/privacy-policy-page" element={<PrivacyPolicyPage />} />
      <Route path="/house-system-page" element={<HOUSESYSTEMPAGE />} />
      <Route path="/gallery-page" element={<GalleryPage />} />
      <Route path="/blogs-page" element={<BlogsPage />} />
      <Route path="/about-school-page" element={<AboutSchoolPage />} />
      <Route path="/internal-gallery-page" element={<InternalGalleryPage />} />
      <Route path="/contact-us-page" element={<ContactUsPage />} />
    </Routes>
  );
}
export default App;
