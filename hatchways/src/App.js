import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const url = "https://api.hatchways.io/assessment/students";
  const initialState = { firstName: "" };

  //setting state for our Student array, our 2 input forms, and our + button to show grades
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [students, setStudents] = useState([{}]);
  const [nameFormState, setNameFormState] = useState(initialState);
  const [tagFormState, setTagFormState] = useState("");


  // This is the component that houses the forms to filter by name and tag
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

  //this is the component that will show the full grades for the student. They are made hidden/shown by the toggle command later
  const GradesList = () => {
    for (let i = 0; i < students.grades.length; i++) {
      return (
        <li>
          test {i} : {test.grade[i]}
        </li>
      );
    }
  };

 //this keeps the Name Filter form in State 
  const handleNameChange = (event) => {
    setNameFormState({ ...nameFormState, [event.target.id]: event.target.value });
    console.log(nameFormState);
  };

 //this keeps the Tag Filter form in State 
  const handleTagChange = (event) => {
    setTagFormState({ ...tagFormState, [event.target.id]: event.target.value });
    console.log(tagFormState);
  };

  //handles the full list of grades being shown or not
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  //async function to pull students from API and keep in state
  const getStudents = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setStudents(data);

  };

  //This is the part that I was not able to finish before submission, filtering the Students by both name and tag
  //but as you can see they are being mapped out and housed in their own div's to be styled appropriately here
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

  //Makes sure we aren't running stuck in a loop, controls getStudents function call during component lifecycle
  useEffect(() => getStudents(), []);

  //This component contains both our filters and the filtered and mapped list of our students
  //when the student data is pulled we can return it to show on screen
  const Loaded = () => {
    return(
    <div className="App-container">
    <FilterForm 
      nameFormState={nameFormState}
      setNameFormState={setNameFormState}
      tagFormState={tagFormState}
      setNameFormState={setNameFormState}/> 
    <StudentList />
  </div>
    )
  }



//ternary operator to make sure we are only displaying our Loaded component when we have Student data pulled from the API
//if we don't have students up on screen, we'll have a Loading screen rather than a React error message
return students ? <div><Loaded/></div> : <h1>loading...</h1>


}

export default App;
