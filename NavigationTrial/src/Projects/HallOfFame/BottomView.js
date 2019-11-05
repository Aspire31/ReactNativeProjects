import React from 'react';
import { View, Text, StyleSheet, props } from 'react-native';
import PrizeView from './PrizeView';

export default class BottomView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            months: ['January', 'February'],
            challenges: ['2 Challenges', '1 Challenge']
        };
    }

    prizeView = () => {
        let counter = -1;
        if (this.props.month == '1') {
            return(
                <React.Fragment>
                <PrizeView count={counter + 1} />
                <PrizeView count={counter + 2} />
            </React.Fragment>
            )
            
        }else{
            return(
                <React.Fragment>
                 <PrizeView count={counter + 3} />
                </React.Fragment>  
            )
            
        }
    }

    render() {
        return (
            <React.Fragment>
                <View style={styles.monthView} >
                    <Text style={styles.monthText} >
                        {this.state.months[this.props.counted]}
                    </Text>
                    <Text style={styles.challengeNumberText} >
                        {this.state.challenges[this.props.counted]}
                    </Text>
                </View>
                <View style={styles.firstPrizeView} >
                    {this.prizeView()}
                </View>
            </React.Fragment>
           );
    }

}

const styles = StyleSheet.create({
    monthView: {
        flexDirection: 'row',
        height: 60
    },
    monthText: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 20,
        paddingLeft: 20
    },
    challengeNumberText: {
        fontSize: 17,
        fontWeight: 'normal',
        paddingTop: 22,
        paddingLeft: 160
    },
    firstPrizeView: {
        //height: 300
    }
})

