import React from 'react';
import { ActivityIndicator,  View, Text , StyleSheet ,Button } from 'react-native';
import { ImageViewer } from '../elements/imageview';
// const DetailScreen = (props) => {
//     console.log(props.route.params);
//     return (
      
//     );
// }

const styles = StyleSheet.create({
    h1 : {
        fontSize:35
    }
});

class DetailScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading : true,
            fullname : '',
            imageurl:''
        }
    }
    static navigationOptions = ({ navigation, screenProps }) => ({
        headerMode: 'none', 
    });
    
    componentDidMount() {
        return fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(responseJson => {
            this.setState({isLoading:false})
            if(responseJson) {
                
                let fullname = responseJson.results[0].name.first + responseJson.results[0].name.last;
                let dp = responseJson.results[0].picture.large;
                this.setState({fullname:fullname,imageurl:dp});
                
                console.log(responseJson.results[0]);
            }
        })
        .catch(error => {
          console.error(error);
        });
    }

    render() {
        return (
            <>
               
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    {this.state.isLoading ? <ActivityIndicator size="large" /> :
                        <>
                        <ImageViewer image={this.state.imageurl}/>
                        <Text style={styles.h1}>{this.state.fullname}</Text>
                        <Button title="Open Drawer" onPress={()=>{
                            this.props.navigation.toggleDrawer();  
                        }}></Button>
                        {/* <Text style={styles.h1}>{this.props.route.params.password}</Text> */}
                        </>
                    }
                </View>
            </>
        );
    }
}
export default DetailScreen;