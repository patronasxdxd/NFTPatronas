import { Navbar, Welcome ,MarketPlace} from "./components";


const App = () => (
  
  <div className="min-h-screen">
    <div className="">
  
      <Navbar />
      <Welcome />
    <div className="flex justify-center gap-2 ">
    <MarketPlace/>

    </div>
    </div>
  </div>
);

export default App;
