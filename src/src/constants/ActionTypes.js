import keymirror from 'keymirror';

export const ActionTypes = keymirror({
    //SHUKI
    SHOW_SHUKI:null,
    SHOW_SHUKI_LIST:null,
    CREATE_SHUKI:null,
    START_CREATING_SHUKI:null,
    STOP_CREATING_SHUKI:null,
    DELETE_SHUKI:null,
    EDIT_SHUKI:null,
    START_EDITING_SHUKI:null,
    STOP_EDITING_SHUKI:null,
    UPLOAD_IMAGE:null,

    //FAVORITE
    SHOW_FAVORITE_LIST:null,
    TOGGLE_FAVORITE:null,

    //TASTECHART
    CHANGE_TASTECHART:null,
});

export default ActionTypes;
