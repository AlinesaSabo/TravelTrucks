import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Loader from "./components/Loader/Loader";
import Layout from "./components/Layout";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const CamperPage = lazy(() => import("./pages/CamperPage/CamperPage"));
const CamperDetailsPage = lazy(() =>
  import("./pages/CamperDetailsPage/CamperDetailsPage")
);
const CamperFeatures = lazy(() =>
  import("./components/CamperFeatures/CamperFeatures")
);
const CamperReviews = lazy(() =>
  import("./components/CamperReviews/CamperReviews")
);
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

import "./App.css";

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="catalog" element={<CamperPage />} />
            <Route path="catalog/:camperId" element={<CamperDetailsPage />}>
              <Route path="features" element={<CamperFeatures />} />
              <Route path="reviews" element={<CamperReviews />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
