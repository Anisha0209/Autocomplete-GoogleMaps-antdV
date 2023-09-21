/* google map instance reducer */
const initialState = {
  isMapReady: false,
  apiKey: 'AIzaSyCAs4dVctp7iC1df5tw0Rp42pQYaPBs_qE',
  center: {
    lat: 3.1048897,
    lng: 101.6103804
  },
  mapProps: {
    map: null,
    marker: null
  },
  autocomplete: null,
  place: {
    name: '',
    address: ''
  }
};

const googleMapReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MAP_READY':
      return {
        ...state,
        isMapReady: true
      };
    case 'STORE_MAP_PROPERTIES': {
      return {
        ...state,
        mapProps: {
          map: action.payload.map,
          marker: action.payload.marker
        }
      };
    }
    case 'STORE_MAP_AUTOCOMPLETE': {
      return {
        ...state,
        autocomplete: action.payload
      };
    }
    case 'SET_MAP_PLACE': {
      return {
        ...state,
        place: {
          name: action.payload.name || '',
          address: action.payload.formatted_address || ''
        }
      };
    }
    default:
      return state;
  }
};

export default googleMapReducers;
