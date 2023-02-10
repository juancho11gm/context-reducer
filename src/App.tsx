import { Dispatch, createContext, useContext, useReducer } from 'react';
import { ActionI, reducer } from './reducer';
import './App.css';

export interface AppStateI {
	count: number;
}
interface ContextProps {
	state: AppStateI;
	dispatch: Dispatch<ActionI>;
}

const MyContext = createContext<ContextProps | null>(null);

export const useCustomContext = (): ContextProps => {
	const contextValue = useContext(MyContext);
	if (contextValue === null) {
		throw Error('Context has not been Provided!');
	}
	return contextValue;
};

function App() {
	const [state, dispatch] = useReducer(reducer, { count: 0 });

	return (
		<MyContext.Provider value={{ state, dispatch }}>
			<Counter />
		</MyContext.Provider>
	);
}

export function Counter() {
	const { state, dispatch } = useCustomContext();
	return (
		<>
			Count: {state.count}
			<button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
			<button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
		</>
	);
}

export default App;
