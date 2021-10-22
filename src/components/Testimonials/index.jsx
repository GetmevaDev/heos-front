import React from 'react';
import styles from './style.module.css'
import Woman from '../../images/woman.png'

const Testimonials = () => {
	return (
		<div className={styles.testimonials}>
			<div className="container">
				<div className={styles.testimonialsInner}>
					<h1 className={styles.title}>Testimonials</h1>
					<div className={styles.arrows}>
						<svg className={styles.arrowLeft} width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M14 26L2 14L14 2" stroke="#BFBFBF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>

						<svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M2 26L14 14L2 2" stroke="#D1A068" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>

					</div>
				</div>
				<div className={styles.cards}>
					<div className={styles.card}>
						<div className={styles.cardInner}>
							<img className={styles.cardImg} src={Woman} alt=""/>
							<div className={styles.nameInner}>
								<h5>Mishel Rich</h5>
								<span>★★★★★</span>
							</div>
						</div>
						<div className={styles.cardText}>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
							aliqua.
							Ut enim ad minim veniam
						</div>
					</div>

					<div className={styles.card}>
						<div className={styles.cardInner}>
							<img className={styles.cardImg} src={Woman} alt=""/>
							<div className={styles.nameInner}>
								<h5>Mishel Rich</h5>
								<span>★★★★★</span>
							</div>
						</div>
						<div className={styles.cardText}>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
							aliqua.
							Ut enim ad minim veniam
						</div>
					</div>

					<div className={styles.card}>
						<div className={styles.cardInner}>
							<img className={styles.cardImg} src={Woman} alt=""/>
							<div className={styles.nameInner}>
								<h5>Mishel Rich</h5>
								<span>★★★★★</span>
							</div>
						</div>
						<div className={styles.cardText}>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
							aliqua.
							Ut enim ad minim veniam
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Testimonials;
