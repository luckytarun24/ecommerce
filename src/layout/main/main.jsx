import { Outlet } from "react-router-dom";

//Components
import { BreadCrumbs, Footer, Header, CommitFooter } from "../../component";

const Main = () => {
  return (
    <div className="main">
      <Header />
      <BreadCrumbs />
      <Outlet />
      <CommitFooter />
      <Footer />
    </div>
  );
};
export default Main;
