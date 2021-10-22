import React from 'react';
import styles from './style.module.css'
import LogoCenter from '../../images/logo-center.png'

const BlockAdress = () => {
	return (
		<div className={styles.blockAddress}>
			<img className={styles.blockimg} src={LogoCenter} alt=""/>
			<div className={styles.leftBlock}>
				<p>29 East 61st 4th Floor New York,
					NY 10065
				</p>
			</div>
			<div className={styles.rightBlock}>
				<p>2422 Montauk Hwy, Bridgehampton,
					NY 11932
				</p>
			</div>
		</div>
	);
};
export default BlockAdress;
