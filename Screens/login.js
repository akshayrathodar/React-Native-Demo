import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, View ,Text, Button , TextInput } from 'react-native';
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            username:'',
            password:''
        }
    }

    buttonclick = () => {
        if(this.state.username == 'ar' && this.state.password == '123') {
            this.props.navigation.push('Details',{
                username:this.state.username,
                password:this.state.password
            });
        } else {
            alert('Wrong Password');
        }
    }

    render() {
        return (
            <>          
            <View style={styles.container}>
                    <Text style={styles.h1}>Login</Text>
                    <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 , margin:5 }}
                    placeholder="Username"
                    onChangeText={(username)=>{this.setState({username})}}
                    />
                    <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 ,margin:5 }}
                    placeholder="password"
                    onChangeText={(password)=>{this.setState({password})}}
                    />
                    <Separator/>
                    <Button title="Go" style={styles.btngo} onPress={this.buttonclick}/>
                </View> 
            </>
        );
    }
}



const Separator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    h1:{
      fontSize:40
    },
    btngo:{
        margin:8,
        padding:5,
        color:'white',
        height:25
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
  });
  