import React , { compo } from 'react';
import { View , Button , StyleSheet } from 'react-native';


export default class Setting extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    gotoLogin = () => {
        this.props.navigation.navigate('Home');
    }

    render() {
        return(
            <View style={styles.container}>
                <Button title="Log Out" onPress={this.gotoLogin}></Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
    }
})