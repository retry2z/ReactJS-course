import { INCREMENT } from '../constants/counter.js';
import { DECREMENT } from '../constants/counter.js';


export const increment = () => ({
    type: INCREMENT
});

export const decrement = () => ({
    type: DECREMENT
});