import { useState } from 'react';

const useForm = (callback) => {

  const [values, setItem] = useState({});

  function handleChange(e) {
    e.persist();
    let name = e.target.name;
    let value = e.target.value;
    setItem({ ...values, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    callback(values);
  }

  return [handleSubmit, handleChange, values];

}

export default useForm;