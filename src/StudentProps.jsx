
import propTypes from 'prop-types';

const Student = (props) => {
  return (
    <div className="student">
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Student: {props.isStudent ? "YES" : "NO"}</p>
    </div>
  );
};

Student.propTypes = {
    name : propTypes.string,
    age: propTypes.number,
    isStudent: propTypes.bool
}

Student.defaultProps = {
    name : "Guest",
    age : 500,
    isStudent: true
}

export default Student;
