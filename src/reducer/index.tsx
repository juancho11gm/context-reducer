import { AppStateI } from '../App';

export type ActionI = { type: 'INCREMENT' } | { type: 'DECREMENT' };

export function reducer(state: AppStateI, action: ActionI) {
	switch (action.type) {
		case 'INCREMENT':
			return { count: state.count + 1 };
		case 'DECREMENT':
			return { count: state.count - 1 };
		default:
			return state;
	}
}
