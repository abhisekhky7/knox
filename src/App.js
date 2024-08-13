import { useState,createContext} from 'react';
import './App.css';
import Header from './components/Header';
import WidgetContainer from './components/WidgetContainer';

export const MyContext = createContext()

function App() {
  const [widget,setWidget]= useState([])
  const [search,onSearch] = useState('')

  return (
    <div className="App mx-5">
      <MyContext.Provider value={{widget,setWidget}} >
       <Header onSearch={onSearch}/>
       <WidgetContainer search={search}/>
      </MyContext.Provider>
    </div>
  );
}

export default App;
