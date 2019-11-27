import comments from '../data/comments';

// const examResultDefaultState = {
// 	question: 0,
// 	comments: [],
// };
const examResultDefaultState = {
	selectedQuestion: 0,
	timeTaken: {
		minutes: 0,
		seconds: 0,
	},
	score: 0,
	comments: [...comments],
};

const examResultReducer = (state = examResultDefaultState, action) => {
	switch (action.type) {
		case 'SET_EXAM_RESULT_SELECTED_QUESTION': {
			const { selectedQuestion } = action.payload;
			return { ...state, selectedQuestion };
		}
		case 'SET_EXAM_RESULT_TIME_TAKEN': {
			const { timeTaken } = action.payload;
			return { ...state, timeTaken };
		}
		case 'FETCH_EXAM_RESULT_SCORE': {
			const { score } = action.payload;
			return { ...state, score };
		}
		case 'SET_EXAM_RESULT_COMMENT': {
			const { comment } = action.payload;
			return { ...state, comments: [...state.comments, comment] };
		}
		default:
			return state;
	}
};

export default examResultReducer;
