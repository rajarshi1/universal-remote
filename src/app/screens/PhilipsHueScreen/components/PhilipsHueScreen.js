import React from 'react';
import { View } from 'react-native';
import NavigationButton from '../../../common/NavigationButton';
import AddLightButton from '../../../common/AddLightButton';
import { PHILIPS_HUE_SCREEN } from '../../../config/Constants';

export default class PhilipsHueScreen extends React.Component {
    static navigationOptions = {
        title: 'Philips Hue',
    };
    render() {
        this.props.from = PHILIPS_HUE_SCREEN;
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}
            >
                <NavigationButton
                    {...this.props}
                    title="Home"
                    to="Home"
                />

                <AddLightButton
                    {...this.props}
                    from={PHILIPS_HUE_SCREEN}
                />
            </View>
        );
    }
}
