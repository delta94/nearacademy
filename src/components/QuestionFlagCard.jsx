import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from './Card';
import { setExamQuestionFlag } from '../actions/examQuestions';
import { appColors, curves, helperStyles } from '../constants';

const Container = styled(Card)`
	position: relative;

	h4 {
		margin-bottom: 0;
	}

	h4 + span {
		${helperStyles.marginBottomSmall}
	}

	button {
		width: 11.2rem;
	}
`;

const flagSize = '2.3rem';
const Flag = styled.div`
	position: absolute;
	top: calc(-${flagSize} / 4);
	right: calc(-${flagSize} / 4);

	border-radius: 50%;
	background-color: ${appColors.primaryDark};
	color: ${appColors.white};

	width: ${flagSize};
	height: ${flagSize};
	display: flex;
	justify-content: center;
	align-items: center;

	transition: opacity 0.6s, transform 0.3s ${curves.easeInBack};
	transform: scale(0);
	opacity: 0;

	${(props) =>
		props.flagged
			? `
		opacity: 1;
		transform: scale(1);
		transition: opacity 0.3s, transform 0.3s ${curves.easeOutBack};`
			: `
		opacity: 0;
		transition: opacity 0.6s, transform 0.3s ${curves.easeInBack};
		transform: scale(0);`}
`;

// eslint-disable-next-line no-shadow
function QuestionFlagCard({ id, index, flag, answer, setExamQuestionFlag }) {
	return (
		<Container>
			<h4 className='h4'>Câu hỏi {index + 1}</h4>
			<span>
				{answer === -1 ? 'Chưa trả lời' : 'Đã trả lời'}
			</span>
			<button
				type='button'
				className='btn btn--white'
				onClick={() => {
					setExamQuestionFlag(id, !flag);
				}}
			>
				{flag ? 'Bỏ đặt cờ' : 'Đặt cờ'}
			</button>
			<Flag flagged={flag}>
				<FontAwesomeIcon icon={faFlag} />
			</Flag>
		</Container>
	);
}

QuestionFlagCard.propTypes = {
	id: PropTypes.string.isRequired,
	index: PropTypes.number.isRequired,
	flag: PropTypes.bool.isRequired,
	answer: PropTypes.number.isRequired,
	setExamQuestionFlag: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
	setExamQuestionFlag: (id, flag) => dispatch(setExamQuestionFlag(id, flag)),
});

export default connect(null, mapDispatchToProps)(QuestionFlagCard);