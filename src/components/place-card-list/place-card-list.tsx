import { useAppSelector } from '../../hooks';
import {Offers} from '../../types/offer';
import PlaceCard from '../place-card/place-card';
import sortingFunction from '../../util';

type PlaceCardList = {
  offers: Offers;
  typeOfList: 'nearest' | 'defoult';
  //selectedPoint?:number;
  setSelectedPoint(id:number): void;


};

function PlacesCardList({offers, typeOfList, setSelectedPoint}: PlaceCardList): JSX.Element {
  const currnetSortOptions = useAppSelector((state) => state.sortOption);

  return (
    <div className={`${typeOfList === 'nearest' ? 'near-places__list places__list' : 'cities__places-list places__list tabs__content'}`}>
      {sortingFunction(offers, currnetSortOptions)?.map((offer) => (
        <PlaceCard onCardMouseOver = {setSelectedPoint} key={offer.id} offer={offer} typeOfCard = {typeOfList}/>
      ))}
    </div>
  );
}

export default PlacesCardList;