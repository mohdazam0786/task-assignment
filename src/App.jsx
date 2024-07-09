import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Preview from "./pages/Preview";
import RentersDashboard from "./pages/RentersDashboard";
import SellersFlowPropertyDetail from "./pages/SellersFlowPropertyDetail";
import SellersFlowLOCATIONDetail from "./pages/SellersFlowLOCATIONDetail";
import SellersFlowPropertyFeatures from "./pages/SellersFlowPropertyFeatures";
import SellersFlowPriceDetails from "./pages/SellersFlowPriceDetails";
import SellersPhotoDetails from "./pages/SellersPhotoDetails";
import SellersPhotoDetails1 from "./pages/SellersPhotoDetails1";
import BuyersrentersDashboard from "./pages/BuyersrentersDashboard";

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
      case "/renters-dashboard-1":
        title = "";
        metaDescription = "";
        break;
      case "/sellers-flow-property-detail":
        title = "";
        metaDescription = "";
        break;
      case "/sellers-flow-location-detail":
        title = "";
        metaDescription = "";
        break;
      case "/sellers-flow-property-features-and-amenities":
        title = "";
        metaDescription = "";
        break;
      case "/sellers-flow-price-details":
        title = "";
        metaDescription = "";
        break;
      case "/sellers-photo-details":
        title = "";
        metaDescription = "";
        break;
      case "/sellers-photo-details1":
        title = "";
        metaDescription = "";
        break;
      case "/buyersrenters-dashboard":
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
      <Route path="/" element={<BuyersrentersDashboard />} />
      <Route path="/renters-dashboard-1" element={<RentersDashboard />} />
      <Route
        path="/sellers-flow-property-detail"
        element={<SellersFlowPropertyDetail />}
      />
      <Route
        path="/sellers-flow-location-detail"
        element={<SellersFlowLOCATIONDetail />}
      />
      <Route
        path="/sellers-flow-property-features-and-amenities"
        element={<SellersFlowPropertyFeatures />}
      />
      <Route
        path="/sellers-flow-price-details"
        element={<SellersFlowPriceDetails />}
      />
      <Route path="/sellers-photo-details" element={<SellersPhotoDetails />} />
      <Route
        path="/sellers-photo-details1"
        element={<SellersPhotoDetails1 />}
      />
      <Route
        path="/buyersrenters-dashboard"
        element={<BuyersrentersDashboard />}
      />
      <Route
        path="/preview"
        element={<Preview />}
      />
    </Routes>
  );
}
export default App;
