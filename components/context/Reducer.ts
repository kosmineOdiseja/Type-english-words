export const enum ContextActionType {
	SET_WORDS = 'SET_WORDS',
	SET_TYPED_WORD = 'SET_TYPED_WORD',
}
const Reducer = (state: any , action: any) => {
	switch (action.type) {
		case ContextActionType.SET_WORDS:
			return {
				...state,
				words: action.payload,
			}
		case ContextActionType.SET_TYPED_WORD:
			return {
				...state,
				typedWord: action.payload,
			}

		default: return state;
	}

}

export default Reducer;