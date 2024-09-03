import Student from './StudentProps.jsx';



function App() {
  return ( <>
  <Student name="Michael" age={23} isStudent={true} />
  <Student name="Neil" age={23} isStudent={true} />
  <Student name="Client" age={23} isStudent={false} />
 <Student/>
  </> );
}

export default App;