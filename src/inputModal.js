import React, { Component } from 'react';
import './index.css'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import Paper from 'material-ui/Paper';
const style1 = {
    height: 500,
    width: 500,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
};

const style = {

    margin: 20,

};

export default class InputModal extends Component{
    constructor(props){
        super(props);
        this.HandleClose=this.HandleClose.bind(this);
        this.closeNoSave=this.closeNoSave.bind(this);

        this.state={
            defaultTExt: "",
            index: null,
        }


    }
    componentWillMount(){

        if (this.props.data){
            let temp = this.props.data[0].index;
            this.setState({
                defaultTExt: this.props.data[0].input.toString()
            });

        }
    }
    HandleClose(){
        if(this.props.data){

            const{handleOverWrite}=this.props;
            handleOverWrite(this.props.data);

        }

        const {saveAndClose}=this.props;
        saveAndClose(document.getElementById("NoteData").value);

    }
    closeNoSave(){
        const {close}=this.props;
        close();
    }

    render(){

        return(
            <div>

                <Paper style={style1} zDepth={3}>
                    <TextField id={"NoteData"}
                    multiLine={true}
                    rows={2}
                    rowsMax={4}
                               defaultValue={this.state.defaultTExt }



                /><br />
                    <RaisedButton label="Cancel" primary={true} style={style} onClick={this.closeNoSave} />
                    <RaisedButton label="SAVE" primary={true} style={style} onClick={this.HandleClose} />
                </Paper>


            </div>

        );
    }
}