//сделать компонент для отбражения 1 карточки
//в мейн добавить нестатичные карточки и наполнять их данными

import { PlaceInfo } from '../../../constInformation/placeInfo';

function PlaceCard(props: PlaceInfo): JSX.Element {
  return (
    <article className ="cities__card place-card">
      {props.premium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={props.photo} width="260" height="200" alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className ="place-card__price-value">&euro;{props.costPerNight}</b>
            <span className ="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <div>
            {props.favourites ? (
              <button className ="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                <svg className="place-card__bookmark-icon" width="18" height="19">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">In bookmarks</span>
              </button>
            ) : (
              <button className="place-card__bookmark-button button" type="button">
                <svg className="place-card__bookmark-icon" width="18" height="19">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            )}
          </div>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${props.rating * 20}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{props.title}</a>
        </h2>
        <p className="place-card__type">{props.type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
