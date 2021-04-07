import React from 'react';
import CheckBoxElem from '../elements/Checkbox';
import Todolist from '../elements/TodoList';

import { TextInput , Button , StyleSheet , View ,Text } from 'react-native';


export default class Todo extends React.Component{
    constructor() {
        super();
        this.state = {
            checked:false,
            list:[],
            temptext : ''
        }
    }

    checkboxChangeValue = (id) => {
        
        let lists = [...this.state.list];
        // lists.filter( x => x.id == id).map(xe => console.log(xe));
        let gotindex = lists.findIndex((obj => obj.id == id));
        lists[gotindex].checked = !lists[gotindex].checked; 
        this.setState({list:lists});
    }

    addTodo = () => {
        if(this.state.temptext != '') {
            let list2 = [...this.state.list];
            list2.push({id:Math.random(),value:this.state.temptext,checked:true});
            this.setState({list:list2,temptext:''});    
            console.log(this.state);            
        }
    }

    onTextboxEffects = (ev) => {
        this.setState({temptext:ev})
    }

    render(){
        return(
            <>  
                <View style={styles.viewstyle}> 
                    <TextInput style={styles.textbox} value={this.state.temptext} onChangeText={(ev)=>this.onTextboxEffects(ev)} />
                    <Button title="Add Todo" style={styles.buttonstyle} onPress={this.addTodo}></Button>
                    <Todolist list={this.state.list} checkevent={this.checkboxChangeValue} />
                </View>            

                {/* <Todoform clickevent={()=>{this.addTodo}} textboxevent={()=>{this.onTextboxEffects}}/> */}
            </>
        );
    }
}
const styles = StyleSheet.create({
    textbox:{
        height: 45,
        borderColor: 'gray',
        borderWidth: 1 ,
        margin:5,
        width:250,
    },
    buttonstyle : {
        margin:8,
        padding:5,
        color:'white',
        height:25
    },
    viewstyle : {
        flex: 2,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})
