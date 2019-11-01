import React , {useState} from 'react';
import { View,Image } from 'react-native';

export default onLoadtry = React.memo(function pureFunction() {
    const [Loaded, setLoaded] = useState(false)
    
    handleLoad = () =>{
        setInterval(() => {setLoaded(true)},500)
    }
return(
    <View style={{padding:90}} > 
        <Image 
        onLoad = {handleLoad}
        style = {{height:200, width:200}}
        source = {Loaded ? {uri: 'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} : require('./Images/grey.jpg') }
        />
    </View>
)
});