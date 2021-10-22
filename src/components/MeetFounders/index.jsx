import React from 'react';
import styles from './style.module.css'
import Man1 from '../../images/man1.png'
import Man2 from '../../images/man2.png'

const MeetFounders = () => {
	return (
		<div className="container">
			<div className={styles.meet}>
				<h1 className={styles.title}>Meet the Founders</h1>
				<div className={styles.centerMeet}>
					<div className={styles.leftMeet}>
						<img className={styles.man} src={Man1} alt=""/>
						<h3 className={styles.name}>Eddie Rubinov</h3>
					</div>
					<div className={styles.rightMeet}>
						<img className={styles.man} src={Man2} alt=""/>
						<h3 className={styles.name}>Arthur Shamalov</h3>
					</div>
				</div>
			</div>
		</div>
	);
};
export default MeetFounders;
