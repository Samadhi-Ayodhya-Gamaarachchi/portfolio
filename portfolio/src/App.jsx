import "./App.css";
import ButtonContact from "./components/button(contactme)/ButtonContact";
import Header from "./components/Header/Header";


function App() {
  return (
    <>
      <div className="hello">
        <Header />
        <div className="name">
          <p>Hi! I'm Samadhi Gamaarachchi,</p>
        
          <p className="passion">Software Engineering Undergraduate</p>
          <ButtonContact/>
        </div>

        </div>
        
    </>
  );
}

export default App;
