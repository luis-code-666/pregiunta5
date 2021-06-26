import "./App.css";
import ProfileCard from "./Components.js/ProfileCard";
import avatar from "./images/avatar.png";
import background from "./images/background.png";

function App() {
  const fakeProfile = {
    name: "Yarriba Castro",
    position: "Design Track",
    description: `I choose design track because I Love
      to design beautiful user-centered
      interfaces.`,
    avatar,
    background,
  };
  return <ProfileCard profile={fakeProfile} />;
}

export default App;
