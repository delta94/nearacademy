import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import get from 'lodash/get';
import Ads from '../components/Ads';
import Pagination from '../components/Pagination';
import QuestionCard from '../components/QuestionCard';
import QuestionFlagCard from '../components/QuestionFlagCard';
import QuestionProgress from '../components/QuestionProgress';
import Line from '../components/Line';
import { examProps } from '../utilities/proptypes';
import { setExamQuestions } from '../actions/examQuestions';
import ContentContainer from '../layout/ContentContainer';

const Content = styled.div`
	display: flex;
	margin-top: 2.5rem;
`;
const ColumnLeft = styled.section`
	margin-right: 1.6rem;

	display: grid;
	grid-template-columns: max-content minmax(min-content, 51rem);
	column-gap: 1.4rem;
	row-gap: 1.7rem;

	.question-flag-card {
		align-self: flex-start;
	}
`;
const ColumnRight = styled.div`
	& > :not(:last-child) {
		margin-bottom: 1.6rem;
	}
`;

// eslint-disable-next-line no-shadow
function ExamQuestionsPage({ exam, setExamQuestions, questions }) {
	const { id, title, questionCount, difficulty } = exam;

	React.useEffect(() => {
		setExamQuestions(exam.questions);
	}, []);

	return (
		<ContentContainer mainTag>
			<h2 className='h2 mt-md'>
				{title}
				<div className='h2 h2--sub mt-tn'>{`${questionCount} câu hỏi - Trình độ ${difficulty}`}</div>
			</h2>
			<Line />
			<Content>
				<ColumnLeft>
					{exam.questions.slice(0, 10).map((q, index) => (
						<React.Fragment key={q.id}>
							<QuestionFlagCard
								id={q.id}
								index={index}
								flag={get(questions[q.id], 'flag', false)}
								answer={get(questions[q.id], 'answer', -1)}
							/>
							<QuestionCard
								id={q.id}
								question={q.question}
								answer={get(questions[q.id], 'answer', -1)}
								answers={q.answers.map((a) => a.text)}
							/>
						</React.Fragment>
					))}
				</ColumnLeft>
				<ColumnRight>
					<QuestionProgress
						examId={id}
						questions={questions}
						resetExam={() => setExamQuestions(exam.questions)}
					/>
					<Ads />
				</ColumnRight>
			</Content>
			<Pagination className='mt-lg' />
		</ContentContainer>
	);
}

ExamQuestionsPage.propTypes = {
	exam: examProps.isRequired,
	questions: PropTypes.objectOf(
		PropTypes.shape({
			flag: PropTypes.bool,
			answer: PropTypes.number,
		}),
	).isRequired,
	setExamQuestions: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
	exam: state.exams.chemistry[props.match.params.id],
	questions: state.examQuestions.questions,
});

const mapDispatchToProps = (dispatch) => ({
	setExamQuestions: (questions) => dispatch(setExamQuestions(questions)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExamQuestionsPage);
