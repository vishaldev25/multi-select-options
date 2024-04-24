import { useState } from "react";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node.js",
  "MongoDB",
];

const SelectElement = () => {
    const [option, setOptions] = useState([]);
    const [search, setSearchTerm] = useState("");
    
  const handleInput = (event) => {
    setOptions((prevValue)=> [event.target.value, ...prevValue]);
    };
    
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        const filteredOptions = skills.filter((skill) =>
          skill.toLowerCase().includes(event.target.value.toLowerCase())
        );
        setSearchTerm(filteredOptions);
    };

    const handleSubmit = (event) => { 
        event.preventDefault();
    }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center">
        <input
          type="search"
          placeholder="Search"
          className="border w-[350px] h-12 border-teal-300 p-3 rounded-lg outline-none"
          id="search"
                  aria-label="Search"
                  onChange={handleSearch}
        />
        <div className="flex flex-col justify-center items-center">
          <select
            className="border w-[350px] h-44 border-teal-300 p-3 rounded-lg outline-none"
            id="skills"
            multiple
            value={option}
            onChange={handleInput}
          >
            {skills.map((skill) => (
              <option key={skill} value={skill}>
                {skill}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
};

export default SelectElement;