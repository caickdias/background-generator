import './App.css';

import Main from './components/_layout/Main';
import Sidebar from './components/_layout/Sidebar';

function App() {
  return (
    <div className="flex justify-end bg-zinc-700 h-screen w-full">      

      <Main />      
      
      <Sidebar />

    </div>
  );
}

export default App;
