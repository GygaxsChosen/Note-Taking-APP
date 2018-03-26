import React, { Component } from 'react';
import './index.css'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

export default class NoteStorage extends Component{
    constructor(props){
        super(props);
        this.state = {open: false};
        this.NoteLoader=this.NoteLoader.bind(this);


    }
    handleToggle = () => this.setState({open: !this.state.open});

NoteLoader(){
    const{displayNote}=this.props;
    displayNote();



}

    render(){

        return(
            <div>

                <RaisedButton
                    label="Saved Notes"
                    onClick={this.handleToggle}
                />
                <Drawer open={this.state.open}>
<div>
    {this.props.noteData.map(x => <div onClick={this.NoteLoader}><MenuItem>{x.input.charAt(0)+x.input.charAt(1)+x.input.charAt(2)+x.input.charAt(3)+x.input.charAt(4)}...</MenuItem></div>)}
</div>
                </Drawer>

            </div>

        );
    }
}