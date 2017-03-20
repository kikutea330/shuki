import ShukiDispatcher from '../ShukiDispatcher';
import { ActionTypes } from '../constants/ActionTypes';

const ShukiListActions = {
    createShuki(name){
        ShukiDispatcher.dispatch({
            type: ActionTypes.CREATE_SHUKI,
            name: name,
        });
    },
    deleteShuki(id){
        console.log("deleteShuki(id):"+id + "is deleted.");
        ShukiDispatcher.dispatch({
            type: ActionTypes.DELETE_SHUKI,
            id: id,
        });
    },
}

export default ShukiListActions;
