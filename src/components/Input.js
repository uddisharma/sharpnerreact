import { useState, useRef, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";

export default function Input() {
  const myRef = useRef();
  useEffect(() => {
    myRef.current.focus();
  }, []);
  const [value, setValue] = useState({
    name: "",
    age: "",
    college: "",
  });
  const { name, age, college } = value;
  let extisingmember = JSON.parse(localStorage.getItem("member"));
  let data = extisingmember ? extisingmember : [];

  const handleClick = () => {
    document.getElementById("btn").style.backgroundColor = "green";
    if (name === "") {
      return toast.error("Please enter a name");
    }
    if (age === "") {
      return toast.error("Please enter age");
    }
    if (age > 30) {
      return toast.error("Age must be smaller than 30");
    }
    if (college === "") {
      return toast.error("Please Enter  College Name");
    }
    data.push(value);
    localStorage.setItem("member", JSON.stringify(data));
    toast.success("Member successfully added !");
    setValue({ ...value, name: "", age: "" });
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="w-[40%] m-auto mt-16">
        <label
          htmlFor="price"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Add Member
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            {/* <span className="text-gray-500 sm:text-sm">$</span> */}
          </div>
          <input
            ref={myRef}
            value={name}
            onChange={(e) => {
              setValue({ ...value, name: e.target.value });
            }}
            type="text"
            name="name"
            id="name"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Name"
          />
          <br />
          <input
            value={age}
            onChange={(e) => {
              setValue({ ...value, age: e.target.value });
            }}
            type="number"
            name="age"
            id="age"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Age"
          />
          <br />
          <input
            value={college}
            onChange={(e) => {
              setValue({ ...value, college: e.target.value });
            }}
            type="text"
            name="college"
            id="college"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="College Name"
          />
          <br />
          <button
            onClick={() => {
              handleClick();
            }}
            disabled={name == ""}
            style={{ backgroundColor: name == "" ? "red" : "blue" }}
            type="button"
            id="btn"
            class="  text-white v bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Add
          </button>
        </div>
        {data.length > 0 ? (
          <table class="table-auto">
            <thead>
              <tr>
                <th>#Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>College</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 &&
                data.map((e, i) => (
                  <tr>
                    <td>{i + 1}</td>
                    <td>{e.name}</td>
                    <td>{e.age}</td>
                    <td>{e.college}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        ) : (
          "no member added till now please add a member"
        )}
      </div>
    </>
  );
}
