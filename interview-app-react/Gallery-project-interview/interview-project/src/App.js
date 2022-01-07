import React, {useState, useEffect } from 'react';
import Login from './Login';
import { GalleryListComponent } from './components/Gallery-list/Gallery-list.component';
import { SearchBoxComponent } from './components/search-box/search-box.component'
import { NavbarComponent } from './components/Navbar/navbar.component';

const App = () => {
    const [loginName, setLoginName] = useState('');
    const [monsters, setMonster ] = useState([]);
    const [searchField, setFieldData] = useState('');
    useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => setMonster(users));
    }, []);
    const handleChange = (e) => {
        setFieldData(e.target.value);
    }

    const filteredData =  monsters
    .filter(monster => 
        monster.name
        .toLowerCase()
        .includes(searchField.toLowerCase()) || monster.username.toLowerCase().includes(searchField.toLowerCase()));
    return (
    <div>
        <NavbarComponent loginName={loginName}/>
        <SearchBoxComponent placeholder='Filter Items' handleChange={handleChange}/>
        <GalleryListComponent monsters={filteredData} setMonster={setMonster}/>
        <div className="g-signin">
            <Login handleLogin={setLoginName}/>
        </div> 
    </div>
    );
}

export default App;
