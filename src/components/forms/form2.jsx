import React, { useState } from "react";

const Form2 = () => {
  const [formData, setFormData] = useState({
    name1: "",
    email: "",
    age: "",
  });
  const handleForm = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const [allData, setData] = useState([]);
  const submitForm = (e) => {
    e.preventDefault();
    setData([...allData, formData]);
    setFormData({
      name1: "",
      email: "",
      age: "",
    });
    console.log(allData);
  };
  return (
    <div>
      <form
        className="px-10 py 20 flex flex-col gap-3 justify-center items-center"
        onSubmit={submitForm}
      >
        <div className="flex flex-col gap-1.5">
          <label>Name</label>
          <input
            type="text"
            value={formData.name1}
            name="name1"
            onChange={handleForm}
            className="border border-red-600"
            placeholder="Enter Your Name"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label>Email</label>
          <input
            type="text"
            value={formData.email}
            name="email"
            onChange={handleForm}
            className="border border-red-600"
            placeholder="Enter Your Email"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label>Age</label>
          <input
            type="text"
            value={formData.age}
            name="age"
            onChange={handleForm}
            className="border border-red-600"
            placeholder="Enter Your Age"
          />
        </div>
        <button className="px-2 py-1 border border-red-500 ">Submit</button>
      </form>

      <div>
        {allData.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col justify-center items-center gap-0.5"
            >
              <h1 className="text-green-500">{item.name1}</h1>
              <h1 className="text-orange-700">{item.email}</h1>
              <h1 className="text-pink-700">{item.age}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Form2;
