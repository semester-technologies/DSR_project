import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

function Home() {
  return (
    <>
      <div className="relative mx-auto">
        <Header />
        <Main />
      </div>
      <Footer />
    </>
  );
}

export default Home;
