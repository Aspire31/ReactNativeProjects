import { StyleSheet } from 'react-native';
import Colors from './Colors'
import {vh,vw} from './Dimension'

export default Styles = StyleSheet.create({
    buttonContainer: {
        justifyContent: 'center',
        backgroundColor: Colors.powderBlue ,
        borderRadius: vh(20),
        borderWidth: vw(0.5),
        borderColor: 'lightgray',
        margin: vh(10),
        alignItems: 'center',
        shadowColor: Colors.veryLightGray,
        shadowOpacity: vw(0.5)
    },
    buttonStyles: {
        fontWeight: 'bold',
        fontSize: vh(20),
        padding: vh(10),
        color: Colors.darkBlue
    },
    textInput: {
        height: vh(50),
        width: vw(200),
        backgroundColor: '#f1f1f1',
        fontSize: vh(16),
        fontWeight: '500',
        paddingLeft: vw(10),
        borderRadius: vh(10)
    },
    container: {
        marginTop: vh(20),
        backgroundColor: Colors.softRed2,
        borderWidth: vw(0.5),
        borderColor: Colors.veryLightGray,
        marginLeft: vw(10),
        marginRight: vw(10),
        borderRadius: vh(20),
        alignItems: 'center',
        shadowColor: Colors.black,
        shadowOffset: { height: vh(5), width: vw(5) },
        shadowOpacity: vh(0.2)
      },
      text: {
        paddingBottom: vh(10),
        paddingLeft: vw(20),
        fontSize: vh(20),
        color: 'white',
        fontWeight: 'bold',
        paddingTop: vh(10)
      },
})
