'use strict';

import React from 'react';
import ShukiItem from './ShukiItem';

class ShukiList extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const onDelete = (id) => this.props.onDelete(id);
        return (
            <ul id="shuki-list">
                {this.props.shukis.map(shuki => (
                    <ShukiItem
                        id={shuki.id}
                        shuki={shuki}
                        onDelete={onDelete}
                    />
                ))}
            </ul>
        );
    }
}

export default ShukiList;
