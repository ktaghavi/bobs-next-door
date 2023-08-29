import './App.css';
import Search from './components/Search'
import NewStoreForm from './components/NewStoreForm';
import StoreList from './components/StoreList';
import React, {useState, useEffect} from'react';

function App() {
  const [stores, setStores] = useState([]);
  const [searchText, setSearchText] = useState('');
  
  useEffect(() => {
    fetch('http://localhost:8085/stores')
    .then(res => res.json())
    .then(data => setStores(data))}, [])

  function addNewStore(store) {
    fetch('http://localhost:8085/stores', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(store)
    })
    
    fetch('http://localhost:8085/stores')
    .then(res => res.json())
    .then(data => setStores(data));
  }
  function handleSearch(searchText){
    setSearchText(searchText);
//     console.log(searchText);
  }
// console.log(searchText);
  const storesToDisplay = stores.filter(store => {
    return store.name.toLowerCase().includes(searchText.toLowerCase());
  })

  return (
    <div className="main-container">
      <img src="/images/bobsburgers.png" />
      <h1>Neighbor Stores</h1>
      <Search handleSearch={handleSearch}/>
      <NewStoreForm addNewStore={addNewStore}/>
      <StoreList storeData={storesToDisplay}/>
    </div>
  );
}

export default App;
