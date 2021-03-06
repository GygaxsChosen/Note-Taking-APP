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
        this.handleExport=this.handleExport.bind(this);


    }
    handleToggle = () => this.setState({open: !this.state.open});

NoteLoader(x){
    const{displayNote}=this.props;
    displayNote(x);



}
    handleExport(){
        const electron = window.require('electron');
        const fs = electron.remote.require('fs');
        const ipcRenderer  = electron.ipcRenderer;
let content =this.props.noteData.map(x=> x.input);
        const {app} = electron.remote.require('electron')

      let etmp= app.getPath('desktop');
        etmp=etmp+"\\myNotes.txt";



        fs.writeFileSync( etmp.toString(), content, 'utf-8');
       // catch(e) { alert('Failed to save the file !'); }
    }

    render(){

        return(
            <div>

                <RaisedButton
                    label="Saved Notes"
                    onClick={this.handleToggle}
                />
                {"  "}
                <RaisedButton
                    label="Export to Desktop"
                    onClick={this.handleExport}
                />

                <Drawer open={this.state.open}>
<div>
    {this.props.noteData.map(x => <div onClick={() => this.NoteLoader(x)}><MenuItem>{x.input.charAt(0)+x.input.charAt(1)+x.input.charAt(2)+x.input.charAt(3)+x.input.charAt(4)}...</MenuItem></div>)}
</div>
                </Drawer>

            </div>

        );
    }
}