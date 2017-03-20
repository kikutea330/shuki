'use strict';

import Counter from '../models/Counter';
import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import Shuki from '../models/Shuki';
import ActionTypes from '../constants/ActionTypes';
import ShukiDispatcher from '../ShukiDispatcher';

/**
 * 酒記リストの状態をアクションに応じて変更するStoreクラス
 */
class ShukiListStore extends ReduceStore {
    constructor(){
        super(ShukiDispatcher);
    }

    getInitialState(){
        return Immutable.OrderedMap();
    }

    reduce(state, action){
        switch (action.type) {
            case ActionTypes.CREATE_SHUKI:
                const id = Counter.increment();
                return state.set(id, new Shuki({
                    id: id,
                    name: action.name,
                }));
            case ActionTypes.START_CREATING_SHUKI:
                return state;
            case ActionTypes.START_EDITING_SHUKI:
                return state;
            case ActionTypes.DELETE_SHUKI:
                console.log(action.id + "is deleted.");
                //return state;
                return state.delete(action.id);
            default:
                return state;
        }
    }
}

export default new ShukiListStore();
