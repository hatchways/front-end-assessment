import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const url = "https://api.hatchways.io/assessment/students";
  const initialState = { firstName: "" };
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [students, setStudents] = useState([{}]);
  const [nameFormState, setNameFormState] = useState(initialState);
  const [tagFormState, setTagFormState] = useState("");

  const FilterForm = () => {
    return (
      <header>
        <div>
          <form>
            <input
              id="filter name"
              placeholder="enter name"
              value={nameFormState.firstName}
              onChange={handleNameChange}
            />

             <input
              id="filter tag"
              placeholder="enter tag"
              value={nameFormState}
              onChange={handleTagChange}
            />
          </form>
        </div>
      </header>
    );
  };

  const GradesList = () => {
    for (let i = 0; i < students.grades.length; i++) {
      return (
        <li>
          {" "}
          test {i} : {test.grade[i]}
        </li>
      );
    }
  };

  const handleNameChange = (event) => {
    setNameFormState({ ...nameFormState, [event.target.id]: event.target.value });
    console.log(nameFormState);
  };

  const handleTagChange = (event) => {
    setTagFormState({ ...tagFormState, [event.target.id]: event.target.value });
    console.log(tagFormState);
  };

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const getStudents = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    setStudents({ data });
    console.log(students)
  
  };

  console.log(students)
  const StudentList = (nameFormState, tagFormState, students) => {
    console.log(students)  
    return (
        students
          .filter((name) => name.includes(nameFormState.firstName))
          .map((student) => (
            <div className="data-container">
              <div className="pic-container">
                <img className="profile-pic" alt="prof-pic" src={student.pic} />
              </div>

              <div className="box">
                <span>
                  <h1>
                    {student.firstName} {student.lastName}
                  </h1>
                </span>
                <div className="data">
                  <h2>email: {student.email} </h2>
                  <h2>company: {student.company}</h2>
                  <h2>skill: {student.skill} </h2>
                  <h2>average: {student.average}</h2>
                  <div className="grades">
                    <GradesList />
                  </div>
                </div>
              </div>
              <button className="openCloseButton" onClick={handleToggle}>
                {navbarOpen ? (
                  <h3> "+"</h3>
                ) : (
                  <div className="grades-container">
                    <div className="button-close">
                      <h3>-</h3>
                    </div>
                    <div className="grades-list-container">
                      {" "}
                      <GradesList />
                    </div>
                  </div>
                )}
              </button>
            </div>
          ))
      );
    
  };

  const Loaded = () => {
    return(
    <div className="App-container">
    <FilterForm /> 
    <StudentList />
  </div>
    )
  }


  useEffect(() => getStudents(), []);
  console.log(typeof students);

return students ? <div><Loaded/></div> : <h1> ...loading</h1>


}

export default App;
