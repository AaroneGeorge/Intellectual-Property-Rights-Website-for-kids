import Navbar from "./Navbar";
import Patent from "./Patent";
import { SharedVariableProvider } from './SharedVariableContext';

function Right2no() {
  return (
    <>
     <SharedVariableProvider>
    <Navbar/>
    <Patent/>
    </SharedVariableProvider>

      </>
  
  );
}

export default Right2no;
