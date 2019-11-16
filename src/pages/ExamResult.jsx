import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AnswerCard from '../components/AnswerCard';
import Card from '../components/Card';
import QuestionGrid from '../components/QuestionGrid';
import CommentSection from '../components/CommentSection';
import Ads from '../components/Ads';
import Pagination from '../components/Pagination';
import ExamCardList from '../components/ExamCardList';
import exam from '../data/Exams';

const HomePage = ({ selectedQuestion }) => (
	<React.Fragment>
		<main className='content-container'>
			<h2 className='h2 mt-md'>
				Bài tập Amin - Amino Axit - Peptit - Protein
				<div className='h2 h2--sub'>30 câu hỏi - Trình độ cơ bản</div>
			</h2>
			<div className='line' />
			<div className='result-summary'>
				<h2 className='h2 mb-sm'>Kết quả tổng quan</h2>
				<div className='result-text'>
					<div className='result-text__score'>20/30</div>
					<div className='result-text__time'>10 phút 56 giây</div>
					<div className='result-text__exp'>+600 exp</div>
					<div className='result-text__rank'>
						Xếp hạng 120 trên tổng số 360 người tham gia làm bài
					</div>
				</div>
			</div>
			<div className='result-details'>
				<h2 className='h2 mb-sm'>Đáp án và lời giải chi tiết</h2>
				<div className='result-details__content'>
					<div className='result-details__col-1'>
						<div className='card question-card'>
							<div className='h3'>Câu hỏi 01</div>
							<span className='mb-sm'>Chưa trả lời</span>
							<button type='button' className='btn btn--white'>
								Lưu lại
							</button>
						</div>
					</div>
					<div className='result-details__col-2'>
						<AnswerCard
							question={exam[selectedQuestion].question}
							answers={exam[selectedQuestion].answers}
						/>
						<Card className='ans-detail-card'>
							<div className='h3'>Lời giải chi tiết</div>
							<div>
								{exam[selectedQuestion].answerDetail
									.split('\n')
									.map((s) => (
										<p key={s}>{s}</p>
									))}
							</div>
						</Card>
						<CommentSection />
					</div>
					<div className='result-details__col-3'>
						<QuestionGrid questionCount={exam.length} />
						<Ads />
					</div>
				</div>
				<Pagination className='mt-lg mb-lg' />
			</div>
			<ExamCardList title='Bạn có thể quan tâm' />
			<div className='mb-md' />
			<ExamCardList title='Các bài tập nổi bật' />
			<div className='mb-md' />
			<ExamCardList title='Các bài tập mới nhất' />
		</main>
	</React.Fragment>
);

HomePage.propTypes = {
	selectedQuestion: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
	selectedQuestion: state.examResult.question,
});

export default connect(
	mapStateToProps,
	null,
)(HomePage);
