import React from 'react';

class ShukiItem extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const {id, shuki} = this.props;
        const onDelete = () => this.props.onDelete(id);
        return (
            <li>
                <div className="view">
                    <label>{shuki.id}：{shuki.name}</label>
                    <button onClick={onDelete} >delete</button>
                </div>
            </li>
        );
    }
}

export default ShukiItem;
