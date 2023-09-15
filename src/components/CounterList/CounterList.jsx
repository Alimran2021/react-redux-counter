import Counter from "../Counter/Counter";

function CounterList({ lists }) {
  return (
    <div>
      {lists.map(() => (
        <Counter key={Math.random()} />
      ))}
    </div>
  );
}

export default CounterList;
