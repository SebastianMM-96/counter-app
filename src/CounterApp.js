import React, {useState} from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value}) => {

    /**
     * Hooks
     * useState - funcion
     * Recibe un valor y retorna un arreglo
     */
    const [counter, setCounter] = useState(0);

    //Handle Addition using events anf functions
    const handleAdd = () => {
        setCounter( (c) => c + 1);
        // setCounter(counter + 1);
    }

    const handleSubstract = () => {
        setCounter((subs) => subs - 1);
    }

    const handleReset = () => {
        setCounter(value)
    }

    return (
        <div>
            <h1>Counter App</h1>
            <h2>{counter}</h2>
            <button type="button" onClick={handleAdd}>+1</button>
            <button type="button" onClick={handleReset}>Reset</button>
            <button type="button" onClick={handleSubstract}>-1</button>
        </div>
    );
}

CounterApp.propTypes = {
    value : PropTypes.number.isRequired
}

export default CounterApp;