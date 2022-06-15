export const enum ContextActionType {
	SET_WORDS = 'SET_WORDS',
}
const Reducer = (state: any , action: any) => {
	switch (action.type) {
		case ContextActionType.SET_WORDS:
			return {
				...state,
				words: action.payload,
			}

		default: return state;
	}

}

export default Reducer;