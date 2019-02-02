const initialState = {
  name: '',
  address: '',
  city: '',
  st: '',
  zip: '',
  img: '',
  mortgage: '',
  rent: ''
};
const UPDATE_NAME = 'UPDATE_NAME';
const UPDATE_ADDRESS = 'UPDATE_ADDRESS';
const UPDATE_CITY = 'UPDATE_CITY';
const UPDATE_ST = 'UPDATE_ST';
const UPDATE_ZIP = 'UPDATE_ZIP';
const UPDATE_IMG = 'UPDATE_IMG';
const UPDATE_MORTGAGE = 'UPDATE_MORTGAGE';
const UPDATE_RENT = 'UPDATE_RENT';
const CANCEL_ADD_NEW = 'CANCEL_ADD_NEW';

function reducer(state = initialState, action) {
  console.log('reducer hit:', action.type);
  switch (action.type) {
    case UPDATE_NAME:
      return { ...state, name: action.payload };

    case UPDATE_ADDRESS:
      return { ...state, address: action.payload };

    case UPDATE_CITY:
      return { ...state, city: action.payload };

    case UPDATE_ST:
      return { ...state, st: action.payload };

    case UPDATE_ZIP:
      return { ...state, zip: action.payload };

    case UPDATE_IMG:
      return { ...state, img: action.payload };

    case UPDATE_MORTGAGE:
      return { ...state, MORTGAGE: action.payload };

    case UPDATE_RENT:
      return { ...state, RENT: action.payload };

    case CANCEL_ADD_NEW:
      return initialState;

    default:
      return state;
  }
}

export function updateName(name) {
  console.log('reducer updateName hit:');
  return {
    type: UPDATE_NAME,
    payload: name
  };
}
export function updateAddress(address) {
  return {
    type: UPDATE_ADDRESS,
    payload: address
  };
}
export function updateCity(city) {
  return {
    type: UPDATE_CITY,
    payload: city
  };
}
export function updateSt(st) {
  return {
    type: UPDATE_ST,
    payload: st
  };
}
export function updateZip(zip) {
  return {
    type: UPDATE_ZIP,
    payload: zip
  };
}
export function updateIMG(img) {
  return {
    type: UPDATE_IMG,
    payload: img
  };
}
export function updateMortgage(mtg) {
  console.log('mtg param in reducer', mtg);
  return {
    type: UPDATE_MORTGAGE,
    payload: mtg
  };
}
export function updateRent(rent) {
  return {
    type: UPDATE_RENT,
    payload: rent
  };
}

export function candelAddNew() {
  return {
    type: CANCEL_ADD_NEW
  };
}
export default reducer;
