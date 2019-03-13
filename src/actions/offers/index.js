import {
  FETCH_OFFERS,
  DELETE_OFFER,
  INSERT_OFFER,
} from '../../constants/actionTypes'

export const fetchOffers = () => ({
  type: FETCH_OFFERS,
});

export const deleteOffer = (id) => ({
  type: DELETE_OFFER,
  id,
})

export const insertOffer = (offer) => ({
  type: INSERT_OFFER,
  offer,
})