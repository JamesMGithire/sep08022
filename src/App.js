import './App.css';
import React from 'react';

function App() {
  const [formData, setFormData] = React.useState(
    {
      firstName: "",
      lastName: "",
      comments: "",
      isFriendly: true,
      employment: "",
      favColor: ""
    }
  );

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData(prevObj => {
      return { ...prevObj, [name]: value }
    });
  }
  console.log(formData.favColor)

  function handleChecked(event) {
    const { name, value, type, checked } = event.target;
    setFormData(prevObj => {
      return { ...prevObj, [name]: type === "checkbox" ? checked : value }
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
      <label htmlFor='isFreindly'>Are you friendly?</label>
      <input
        type="checkbox"
        id='isFriendly'
        name='isFriendly'
        checked={formData.isFriendly}
        onChange={handleChecked}
      />

      <fieldset>
        <legend>Current employment status</legend>
        <input
          type="radio"
          id="unemployment"
          name='employment'
          value="unemployment"
          onChange={handleChecked}
        /><label>Unemployment</label>
        <input
          type="radio"
          id="unemployment"
          name='employment'
          value="part-time"
          onChange={handleChecked}
        /><label>Part-time</label>
        <input
          type="radio"
          id="unemployment"
          name='employment'
          value="full-time"
          onChange={handleChecked}
        /><label>Full-time</label>
      </fieldset>

      <select
        id='favColor'
        value={formData.favColor}
        onChange={handleChange}
        name="favColor"
      >
        <option>-- Choose --</option>
        <option value="red">Red</option>
        <option value="orange">Orange</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </select>
    </form>
  );
}

export default App;
