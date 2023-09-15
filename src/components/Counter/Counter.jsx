import { decrement, increment } from "../../redux/counter/actions";
import { connect } from "react-redux";

function Counter({ state, increment, decrement }) {
  return (
    <div className="w-96 m-auto p-14 shadow-lg">
      <h1 className="mb-10 font-bold text-lg">{state}</h1>
      <div className="flex justify-between">
        <button
          className="uppercase text-green-600"
          type="button"
          onClick={increment}
        >
          increment
        </button>
        <button
          className="uppercase text-red-600"
          type="button"
          onClick={decrement}
        >
          decrement
        </button>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    count: state.value,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    increment: (value) => dispatch(increment(value)),
    decrement: (value) => dispatch(decrement(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
