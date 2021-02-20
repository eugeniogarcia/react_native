import React, { Fragment, useReducer, useEffect } from 'react';

//Estado inicial. Tiene tres propiedades
const initialState = {
  options: [
    { id: 1, name: 'First', value: 10 },
    { id: 2, name: 'Second', value: 50 },
    { id: 3, name: 'Third', value: 200 }
  ],
  quantity: 1,
  selected: 1
};

function reduceButtonStates(state) {
  return {
    ...state,
    decrementDisabled: state.quantity === 0,
    incrementDisabled: state.quantity === 10
  };
}

function reduceTotal(state) {
  const option = state.options.find(option => option.id === state.selected);
  return { ...state, total: state.quantity * option.value };
}

//Reducer. Utiliza los helpers anteriores
function reducer(state, action) {
  let newState;
  switch (action.type) {
    case 'init':
      newState = reduceTotal(state);
      return reduceButtonStates(newState);
    case 'decrementQuantity':
      newState = { ...state, quantity: state.quantity - 1 };
      newState = reduceTotal(newState);
      return reduceButtonStates(newState);
    case 'incrementQuantity':
      newState = { ...state, quantity: state.quantity + 1 };
      newState = reduceTotal(newState);
      return reduceButtonStates(newState);
    case 'selectItem':
      newState = { ...state, selected: Number(action.id) };
      return reduceTotal(newState);
    default:
      throw new Error(`${action.type} is not a valid action`);
  }
}

export default function App() {
  const [
    {
      options,
      selected,
      quantity,
      total,
      decrementDisabled,
      incrementDisabled
    },
    dispatch
  ] = 
  //Retorna el estado y el dispath. El dispatch admite una acción. La accion se procesa con el reducer que indicamos aqui. Del estado podemos acceder a los diferentes key que lo constituyen
  useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: 'init' });
  }, []);

  return (
    <Fragment>
      <section>
        <button
          disabled={decrementDisabled}
          //Con el dispatch pasamos la acción que queremos procesar. Esto se ejecutara con el reducer, y dará lugar a un nuevo estado
          onClick={() => dispatch({ type: 'decrementQuantity' })}
        >
          -
        </button>
        <button
          disabled={incrementDisabled}
          onClick={() => dispatch({ type: 'incrementQuantity' })}
        >
          +
        </button>
        <input readOnly value={quantity} />
      </section>
      <section>
        <select
          value={selected}
          onChange={e => dispatch({ type: 'selectItem', id: e.target.value })}
        >
          {options.map(o => (
            <option key={o.id} value={o.id}>
              {o.name}
            </option>
          ))}
        </select>
      </section>
      <section>
        <strong>{total}</strong>
      </section>
    </Fragment>
  );
}
