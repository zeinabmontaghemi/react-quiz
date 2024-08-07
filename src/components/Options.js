function Optiens({ question }) {
  return (
    <div className="options">
      {question.options.map((option) => (
        <button className="btn btn-optin">
          {option} key={option}
        </button>
      ))}
      ;
    </div>
  );
}

export default Optiens;
