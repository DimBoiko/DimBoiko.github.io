import React from 'react';

const Footer = () => {
	return (
		<footer className="footer">
						<div className="footer__container">
							<div className="footer__row">
								<div className="footer__beat-share">
									<div className="footer__subtitle">beatShare.</div>
									<ul className="footer__list">
										<li className="footer__text"><a>About us</a></li>
										<li className="footer__text"><a>Blog</a></li>
										<li className="footer__text"><a>Contacts</a></li>
									</ul>
								</div>
								<div className="footer__smm">
									<div className="footer__subtitle">Social Media</div>
									<ul className="footer__list">
										<li className="footer__text"><a>Instagram</a></li>
										<li className="footer__text"><a>Facebook</a></li>
										<li className="footer__text"><a>Twitter</a></li>
										<li className="footer__text"><a>YouTube</a></li>
										<li className="footer__text"><a>SoundCloud</a></li>
									</ul>
								</div>
								<div className="footer__support">
									<div className="footer__subtitle">Support</div>
									<ul className="footer__list">
										<li className="footer__text"><a>How to buy beat?</a></li>
										<li className="footer__text"><a>Start selling</a></li>
										<li className="footer__text"><a>Create account & Sign in</a></li>
									</ul>
								</div>
							</div>
						</div>
						<div className="footer__copyright">
							<span>© 2022 beatShare., Inc.   |   Created by Dima Boiko </span>
						</div>
		</footer>
	);
}

export default Footer;
