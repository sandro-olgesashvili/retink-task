import Beta from "./components/Beta";
import Explainer from "./components/Explainer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Info from "./components/Info";
import Transform from "./components/Transform";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Explainer />
        <Info />
        <Transform />
        <Gallery />
        <Beta />
      </div>
    </div>
  );
}

export default App;
