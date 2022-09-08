import './App.css';
import React from 'react';

function App() {
  const [formData, setFormData] = React.useState(
    { firstName: "", lastName: "", comments: "" }
  );
  console.log(formData);
  function handleChange(event) {
    setFormData(prevObj => {
      return { ...prevObj, [event.target.name]: event.target.value }
    });
  }
  return (
    <form className='App'>
      <input
        type="text"
        placeholder="First Name"
        onChange={handleChange}
        name="firstName"
        value={formData.firstName}
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={handleChange}
        name="lastName"
        value={formData.lastName}
      />
      <textarea
        value={formData.comments}
        onChange={handleChange}
        name="comments"
      />
      <input 
      type="checkbox"
      id='isFriendly'
      />
      <label htmlFor='isFreindly'>Are you friendly?</label>
    </form>
  );
}

export default App;
