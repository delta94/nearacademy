import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from './Card';
import { theme, mixins } from '../constants';

const Container = styled(Card)`
	display: inline-flex;
	width: 21rem;
	transition: box-shadow 0.3s ease-out, transform 0.3s ease-out;
	text-align: left;

	& > :not(img) {
		padding: ${theme.cardPadding};
	}

	img {
		border-top-right-radius: inherit;
		border-top-left-radius: inherit;
		object-fit: cover;
		height: 11rem;
	}

	&:hover {
		${mixins.applyScale('transform: scale(1.075);')}
		box-shadow: 0 .25rem 1rem rgba(0,0,0,.1);
	}

	p {
		// override bs reboot
		margin-bottom: 0;
	}
`;

const Description = styled.p`
	font-weight: 600;
`;

const Date = styled.p`
	font-size: 1.1rem;
`;

export default function ExamCard({ image, title, description, date }) {
	return (
		<Container background='white' noPadding>
			<img src={image} alt='exam preview' />
			<div>
				{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
				<a href=''>
					<h4 className='h4'>{title}</h4>
				</a>
				<Description>{description}</Description>
				<Date>{`Phát hành: ${date}`}</Date>
			</div>
		</Container>
	);
}

ExamCard.propTypes = {
	image: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
};