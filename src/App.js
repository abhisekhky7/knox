import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import WidgetContainer from './components/WidgetContainer';

function App() {
const [search,onSearch] = useState('')

  return (
    <div className="App mx-5">
      <Header onSearch={onSearch}/>
      <WidgetContainer search={search}/>
    </div>
  );
}

export default App;
