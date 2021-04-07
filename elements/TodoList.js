import React from 'react';

import { View , Text , StyleSheet ,CheckBox , Card } from 'react-native';


const Todolist = (props) => {
    
    // let ListItems = list.map((items) => {
    //     <Text>Hi</Text>
    // });
    return(
        <>
            <View style={styles.viewstyle}> 
            {/* <CheckBox value={props.value} onValueChange={props.changevalue} /> */}
            
                {props.list.map(data =>(
                    <>
                    <View style={styles.rowview}>
                    <CheckBox style={styles.checkboxstyle}  value={data.checked} onValueChange={()=>props.checkevent(data.id)}></CheckBox>
                    <Text style={data.checked ? '' : styles.uncheckstyle} key={data.id}>{data.value} </Text>
                    </View>        
                    </>
                ))}
            
            </View>            
        </>
    );
}

const styles = StyleSheet.create({
    rowview:{
        width: '100%',
        flexDirection: 'row',
        paddingRight: 10,
        paddingBottom: 5,
        paddingTop: 5,
        justifyContent: 'center',
        
    },
    checkboxstyle:{
        margin:4
    },
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
    },
    uncheckstyle:{
        textDecorationLine: 'line-through', textDecorationStyle: 'solid'
    }
})

export default Todolist;