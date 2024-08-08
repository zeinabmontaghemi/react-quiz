function FinishScreen({ points, maxPossiblePoints }) {
  const precentage = (points / maxPossiblePoints) * 100;
  return (
    <p>
      You scored <strong>{points}</strong> out of {maxPossiblePoints}(
      {Math.ciel(precentage)})
    </p>
  );
}

export default FinishScreen;
