import { useState } from 'react';
import Nav from './Nav';
import SongList from './SongList';


function App() {
  const [list, setList] = useState([]);
  const [search, setSearch] = useState('')


  return (
    <>
      <Nav setList={setList} setSearch={setSearch}/>
      <SongList list={list} text={search}/>
    </>
  );
}

export default App;
