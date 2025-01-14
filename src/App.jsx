import Desktop from "./components/desktop/Desktop";
import Mobile from "./components/mobile/Mobile";

function App() {
  return (
    <div className="bg-[url('/src/assets/images/background.png')] bg-no-repeat bg-cover bg-center relative min-h-screen">
      <Desktop />
      <Mobile />
    </div>
  );
}

export default App;
