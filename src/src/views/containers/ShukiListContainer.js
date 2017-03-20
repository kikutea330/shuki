import React from 'react';
import {Container} from 'flux/utils';
import ShukiListStore from '../../stores/ShukiListStore';
import ShukiList from '../components/ShukiList';
import ShukiListActions from '../../actions/ShukiListActions';

class ShukiListContainer extends React.Component {
    static getStores(){
        return [ShukiListStore];
    }

    static calculateState(prevState){
        console.log(prevState);
        console.log(ShukiListStore.getState());
        return {
            //state
            shukis: ShukiListStore.getState(),

            //action
            onDelete: ShukiListActions.deleteShuki,
        };
    }

    render(){
        return (
            <ShukiList {...this.state} />
        );
    }
}

export default Container.create(ShukiListContainer,  {pure: false});
