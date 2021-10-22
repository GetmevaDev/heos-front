import React from 'react';
import styles from './navbar.module.css'
import Logo from '../../images/logo.png'

const Index = () => {
	return (
		<div className="container">
			<div className={styles.main}>
				<div className={styles.left}>
					<img src={Logo} alt="Logo"/>
				</div>
				<nav className={styles.center}>
					<ul>
						<li>Home</li>
						<li>About Us</li>
						<li>Services</li>
						<li className={styles.contact}>Contact
							<div className={styles.contactBlock}>
								<a href="/#">Manhattan Salon</a>
								<a href="/#">Hampton Salon</a>
							</div>
						</li>
					</ul>
				</nav>
				<div className={styles.rightSearch}>
					<i className="fas fa-search"></i>
					<input type='name'/>
				</div>
			</div>
		</div>
	);
};
export default Index;
