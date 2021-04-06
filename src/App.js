import './App.css';
import Header from './components/Header'
import NavigationBar from "./components/NavigationBar.js";
import BackgroundSection from "./components/BackgroundSection.js";
import Image from "./components/Image"
import FullImage from "./components/FullImage"

function App() {
  return (
    <div className="App">
      {/* Navigation Bar */}
      <NavigationBar></NavigationBar>
      <BackgroundSection
        bgHeight="100vh"
        minBgHeight="500px"
        bgColor="#182225"
      >
        <Header></Header>
      </BackgroundSection>
      <BackgroundSection         bgHeight="100vh"
        minBgHeight="500px"
        bgColor="#182225">
      <p>content</p>
      </BackgroundSection>

    </div>
  );
}

export default App;
