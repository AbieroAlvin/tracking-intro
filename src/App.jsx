import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <div className="w-full h-screen mx-auto z-20">
        <Navbar />
        <Hero />
      </div>
      <div className="bg-[var(--L-Grayish-Blue)] w-[55vw] h-[50vh] absolute top-[0] right-0 z-[-10] rounded-bl-[5rem]"></div>
    </div>
  );
}

export default App;
