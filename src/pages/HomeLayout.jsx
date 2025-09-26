// src/pages/HomeLayout.js
import { Outlet, useNavigation } from "react-router-dom";
import { Navbar } from "../components/Navbar";

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  const value = "some value";
  return (
    <>
      <Navbar />
      <main
        className="page"
        style={{
          display: isPageLoading ? "grid" : "block",
          placeContent: isPageLoading ? "center" : "intial",
        }}
      >
        {isPageLoading ? (
          <div className="loading" />
        ) : (
          <Outlet context={{ value }} />
        )}
      </main>
    </>
  );
};

export default HomeLayout;
