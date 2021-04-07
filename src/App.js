import "./App.css";
import Header from "./components/Header";
import NavigationBar from "./components/NavigationBar.js";
import BackgroundSection from "./components/BackgroundSection.js";
import Image from "./components/Image";
import FullImage from "./components/FullImage";
import ContentContainer from "./components/ContentContainer.js";

function App() {
  return (
    <div className="App">
      {/* Navigation Bar */}
      <NavigationBar></NavigationBar>
      <BackgroundSection bgHeight="100vh" minBgHeight="500px">
        <Header></Header>
      </BackgroundSection>
      <BackgroundSection bgHeight="100vh" minBgHeight="50px">
      <ContentContainer id="explore" title="Explore">
        <p>hi</p>
        </ContentContainer>
      </BackgroundSection>
      {/* <BackgroundSection bgHeight="100vh" minBgHeight="50px">
        <p>Explorer</p>
      </BackgroundSection> */}
    </div>
  );
}

export default App;
