import Navbar from "./components/Navbar";
import { Pannel } from "./components/Pannel";
import { Footer } from "./components/Footer";
import { Allroutes } from "./components/Allroutes";
import { useContext } from "react";
import { AuthContext } from "./AuthContext/AuthProvider";

function App() {
  const { signin } = useContext(AuthContext);
  const { cart } = useContext(AuthContext);
  return (
    <>
      {signin ? null : (
        <div className="headroom">
          <Navbar />
          {cart ? null : <Pannel />}
        </div>
      )}
      <Allroutes />

      <Footer />
    </>
  );
}

export default App;
