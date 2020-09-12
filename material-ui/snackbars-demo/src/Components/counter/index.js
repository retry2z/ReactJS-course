import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from '../../redux/actions/counter';


const Counter = () => {
    const count = useSelector(state => state.counter.counter);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Count: {count}</h2>

            <button onClick={() => dispatch(increment())}>Increment</button>
        </div>
    )
}

export default Counter