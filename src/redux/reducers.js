import counter from './reducers/counter.js';
import userInfo from './reducers/userInfo';

export default function combineReducers(state = {}, action) {
    return {
        counter: counter(state.counter, action),
        userInfo: userInfo(state.userInfo, action),
    };
}