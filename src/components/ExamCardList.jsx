import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import ExamCard from './ExamCard';
import { examProps } from '../utilities/proptypes';
import styled, { appColors } from '../styles';
import { H3 } from './Headings';

export const Recommend = styled.div`
	padding-top: 3rem;
`;

const StyledSlider = styled(Slider)`
	/* react-slick package */
	.slick-slide {
		/* dont know why carousel item is not centered by default */
		text-align: center;
		padding-top: 1.5rem;
		padding-bottom: 2.5rem;
	}

	.arrow-left,
	.arrow-right {
		&::before {
			transition: all 0.25s ease-out;
			color: ${appColors.primary};
		}
	}
`;

function PreviousButton({ className, onClick }) {
	return (
		<div
			className={className + ' arrow-right'}
			aria-hidden='true'
			onClick={onClick}
		/>
	);
}
function NextButton({ className, onClick }) {
	return (
		<div
			className={className + ' arrow-left'}
			aria-hidden='true'
			onClick={onClick}
		/>
	);
}
PreviousButton.propTypes = {
	className: PropTypes.string,
	onClick: PropTypes.func,
};
NextButton.propTypes = {
	className: PropTypes.string,
	onClick: PropTypes.func,
};
PreviousButton.defaultProps = {
	className: '',
	onClick: null,
};
NextButton.defaultProps = {
	className: '',
	onClick: null,
};

const resonsiveSettings = [
	{
		breakpoint: 860,
		settings: {
			slidesToShow: 3,
		},
	},
	{
		breakpoint: 640,
		settings: {
			draggable: true,
			slidesToShow: 2,
		},
	},
	{
		breakpoint: 430,
		settings: {
			draggable: true,
			slidesToShow: 1,
		},
	},
];

export default function ExamCardList({ title, exams, slidesToShow }) {
	return (
		<section>
			<H3 className='mb-0'>{title}</H3>
			<StyledSlider
				slidesToShow={slidesToShow}
				slidesToScroll={1}
				infinite={false}
				nextArrow={<NextButton />}
				prevArrow={<PreviousButton />}
				draggable={false}
				responsive={resonsiveSettings}
			>
				{exams.map((e) => (
					<ExamCard
						key={e.id}
						image={e.image}
						title={e.title}
						description={`${e.questionCount} câu hỏi - Trình độ ${e.difficulty}`}
						date={e.publish}
					/>
				))}
			</StyledSlider>
		</section>
	);
}

ExamCardList.propTypes = {
	title: PropTypes.string.isRequired,
	exams: PropTypes.arrayOf(examProps).isRequired,
	slidesToShow: PropTypes.number,
};

ExamCardList.defaultProps = {
	slidesToShow: 4,
};
