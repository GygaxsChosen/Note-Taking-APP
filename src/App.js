import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import AddNoteButton from './addNoteButton.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NoteStorage from './noteStorage.js'


import InputModal from './inputModal.js'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            notes: [],
            savedNoteDisplay: false,
        };


        this.addNote = this.addNote.bind(this);
        this.saveNote = this.saveNote.bind(this);
        this.close = this.close.bind(this);
        this.loadNote = this.loadNote.bind(this);
        this.handleOverWrite=this.handleOverWrite.bind(this);

    }

    loadNote() {
this.setState({
    editing: false,
    savedNoteDisplay: true,

})

    }

    handleOverWrite(index){
console.log(index);
let temp = this.state.notes

    }

    addNote() {
        this.setState({
            editing: true,
        });

    }

    close() {
        this.setState({
            editing: false,
            savedNoteDisplay:false
        });

    }

    saveNote(input) {
        let temp = this.state.notes;
        temp.push({index:temp.length, input});


        this.setState({
            editing: false,
            notes: temp,
            savedNoteDisplay:false,



        });


    }


    render() {
        return (
            <div>
                <div className={"showNotesButton"}>
                    <MuiThemeProvider>
                        <NoteStorage
                            noteData={this.state.notes}
                            displayNote={this.loadNote}
                        />
                    </MuiThemeProvider>
                </div>
                {this.state.savedNoteDisplay&&
                <MuiThemeProvider>
                    <div>
                        <InputModal
                            saveAndClose={this.saveNote}
                            close={this.close}
                            data={this.state.notes}
                            handleOverWrite={this.handleOverWrite}
                        />

                    </div>
                </MuiThemeProvider>

                }
                {this.state.editing &&

                <MuiThemeProvider>
                    <div>
                        <InputModal
                            saveAndClose={this.saveNote}
                            close={this.close}/>

                    </div>
                </MuiThemeProvider>
                }


                <div onClick={this.addNote} className={"bottomright"}>
                    <MuiThemeProvider>
                        <AddNoteButton/>
                    </MuiThemeProvider>
                </div>

            </div>


        );
    }
}

export default App;
