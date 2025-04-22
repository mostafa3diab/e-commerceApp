import { useContext } from "react";
import { CounterContext } from "../../context/counterContext";

function Carts() {
  let x = useContext(CounterContext);
  console.log(x);

  return (
    <div>
      counter is : {x.counter}
      <button
        onClick={() => {
          x.setCounter(Math.round(Math.random() * 100));
        }}
        className="btn bg-info d-block"
      >
        submit
      </button>
    </div>
  );
}

export default Carts;
