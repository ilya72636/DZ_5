import React, { useState } from 'react';

function NameList() {
  const [inputValue, setInputValue] = useState('');
  const [names, setNames] = useState([]);
  
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const addName = () => {
    if (inputValue.trim() !== '') {
      setNames([...names, inputValue.trim()]);
      setInputValue('');
    }
  };

  const changeName = (index) => {
    return () => {
      const newName = prompt('Введите новое имя:');
      if (newName !== null && newName.trim() !== '') {
        const updatedNames = [...names];
        updatedNames[index] = newName.trim();
        setNames(updatedNames);
      }
    };
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Введите имя" />
      <button onClick={addName} disabled={inputValue.trim() === ''}>Добавить</button>
      {names.length === 0 && <p>Список пуст</p>}
      <ul>
        {names.map((name, index) => (
          <li key={index}>
            {name}
            <button onClick={changeName(index)}>Поменять</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NameList;
