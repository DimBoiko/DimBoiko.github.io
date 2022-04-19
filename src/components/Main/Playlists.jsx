import React from 'react';

const Playlists = ({img}) => {
	return (
		<div>
						<div className="playlists type-beats">
								<div className="playlists__title">
									<h2>Type beats</h2>
								</div>
								<div className="playlists__row">
									<div className="playlists__item">
										<div className="playlists__background">
										<img src={img[0]} alt="trap"></img>
											<div className="playlists__describe">
												<span>Trap type beat</span>
											</div>
										</div>
									</div>
									<div className="playlists__item">
										<div className="playlists__background">
											<img src={img[1]} alt="drll"></img>
											<div className="playlists__describe">
												<span>Drill type beat</span>
											</div>
										</div>
									</div>
									<div className="playlists__item">
										<div className="playlists__background">
											<img src={img[2]} alt=""></img>
											<div className="playlists__describe">
												<span>Hyperpop type beat</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="playlists genre">
								<div className="playlists__title">
									<h2>Top genres</h2>
								</div>
								<div className="playlists__row">
									<div className="playlists__item">
										<div className="playlists__background">
											<img src={img[3]} alt="electronic"></img>
											<div className="playlists__describe">
												<span>Electronic Music</span>
											</div>
										</div>
									</div>
									<div className="playlists__item">
										<div className="playlists__background">
											<img src={img[4]} alt="rock"></img>
											<div className="playlists__describe">
												<span>Rock Music</span>
											</div>
										</div>
									</div>
									<div className="playlists__item">
										<div className="playlists__background">
											<img src={img[5]} alt="R&B"></img>
											<div className="playlists__describe">
												<span>R&B Music</span>
											</div>
										</div>
									</div>
								</div>
							</div>
		</div>
	);
}

export default Playlists;
