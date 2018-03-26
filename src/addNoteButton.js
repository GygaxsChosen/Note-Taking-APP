import React, { Component } from 'react';
import './index.css'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

export default class Button extends Component{
    constructor(props){
        super(props);


    }

    render(){

        return(
            <div>

                <FloatingActionButton>
                    <ContentAdd/>
                </FloatingActionButton>

            </div>

        );
    }
}