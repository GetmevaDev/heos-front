import React from 'react';
import styles from './style.module.css'

import Photo from '../../images/bitmap.png'

const AboutUs = () => {
	return (
		<div className={styles.about}>
			<div className="container">
				<div className={styles.center}>
					<div className={styles.left}>
						<h1 className={styles.title}>About Us <br/> <strong>EDDIE ARTHUR</strong></h1>
						<p className={styles.desc}>Eddie and Arthur met over a decade ago, as apprentices at the salon AKS. Where they began their
							careers learning from top stylists and colorists. Each specializing in their own art, Eddie as a colorist and Arthur as a
							stylist. Soon they became friends and partners, as a team they eventually moved on to yet another top NYC salon, Oscar
							Blandi on Madison Ave. Here is where they really owned their skills, combining their previous experience and executing
							beautiful work and growing their own clientele. Sharing the dream to one day have their own salon, they decided as
							friends, and team to become partners for this goal. Eddie Arthur Salon was born, following true to their experience the
							salon is located on Madison Ave, providing quality services to our clientele.</p>
					</div>

					<div className={styles.right}>
						<img className={styles.photo} src={Photo} alt=""/>
					</div>
				</div>
			</div>

		</div>
	);
};
export default AboutUs;
