import Images from "./components/Images";
import './App.css';

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen m-16">
        <div className="flex flex-col items-center mb-4">
        <p>Code Challenge</p>
        <p className="text-7xl font-extrabold font-sans mb-1">Infinite Scroll Unsplash Images</p>
        </div>
        <div className="max-w-screen-xl">
        <Images/>
        </div>
      </div>
    </>
  );
}

export default App;
