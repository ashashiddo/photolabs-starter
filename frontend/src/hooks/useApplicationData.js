import { useReducer } from "react";

/* insert app levels actions below */
 const ACTIONS = {
    // FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
    // FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
    // SET_PHOTO_DATA: 'SET_PHOTO_DATA',
    // SET_TOPIC_DATA: 'SET_TOPIC_DATA',
    // SELECT_PHOTO: 'SELECT_PHOTO',
    // DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
    TOGGLE_MODAL: 'TOGGLE_MODAL',
    SHOW_DISPLAY_ALERT: 'SHOW_DISPLAY_ALERT',
    UPDATE_SELECTED_PHOTO:'UPDATE_SELECTED_PHOTO'
    
  }
  
  function reducer(state, action) {
    switch (action.type) {
    //   case FAV_PHOTO_ADDED:
    //     return { /* insert logic */ }
    //   { /* insert all relevant actions as case statements*/ }  
      case ACTIONS.TOGGLE_MODAL:
        return {...state, modalIsOpen:!state.modalIsOpen}
      case ACTIONS.UPDATE_SELECTED_PHOTO:
        return {...state,selectedPhoto:{...action.photo}}
    case ACTIONS.SHOW_DISPLAY_ALERT :
        return {...state, displayAlert:[...action.pictures]}
      default:
        throw new Error(
          `Tried to reduce with unsupported action type: ${action.type}`
        );
    }
  }
  // this is the hook
  const intialState = {
    displayAlert:[],//array of objects
    modalIsOpen:false,
    selectedPhoto:{}
}
  const useApplicationData = () => {
    const [state, dispatch] = useReducer(reducer,intialState)
    const showDisplayAlert = (pictures) =>{
        dispatch({ type: ACTIONS.SHOW_DISPLAY_ALERT, pictures})
    }
    const updateSelectedPhoto = (photo) => {
        dispatch({ type: ACTIONS.UPDATE_SELECTED_PHOTO, photo})

    }
    const toggleModal = () => {
        dispatch({ type: ACTIONS.TOGGLE_MODAL})
      };
      return {state, toggleModal, showDisplayAlert,updateSelectedPhoto}
      //displayAlert, setDisplayAlert,modalIsOpen, setModalIsOpen,selectedPhoto,setSelectedPhoto
  }
 export default useApplicationData;
