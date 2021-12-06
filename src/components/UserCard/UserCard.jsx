import './user-card.scss';

const userCard = (props) => {
    return (
        <div className="user-card">
            <div className="user-card__info">
                <img className="user-card__img" src={props.userImg} alt="Victor" />
                <div className="user-card__user">
                    <h3 className='user-card__name'>{props.userName}</h3>
                    <span className='user-card__age'>{props.userAge}</span>
                </div>
                <p className='user-card__location'>{props.userLocation}</p>

                <div className="user-card__stat">
                    <div className="user-card__stat-inner">
                        <div className="user-card__stat-item">
                            <p className='user-card__stat-count'>{props.userFollowersCount}K</p>
                            <span className='user-card__stat-descr'>{props.userFollowers}</span>
                        </div>
                        <div className="user-card__stat-item">
                            <p className='user-card__stat-count'>{props.userLikesCount}K</p>
                            <span className='user-card__stat-descr'>{props.userLikes}</span>
                        </div>
                        <div className="user-card__stat-item">
                            <p className='user-card__stat-count'>{props.userPhotosCount}K</p>
                            <span className='user-card__stat-descr'>{props.userPhotos}</span>
                        </div>
                    </div>
                </div>
                {props.children}
            </div>
        </div>
    );
};

export default userCard;