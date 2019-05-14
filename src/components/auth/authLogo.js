import React from 'react';
import { View, Image } from 'react-native';

// LOGO IMAGE
import LogoImage from '../../assets/images/nba_login_logo.png';
//import LogoImage2X from '../../assets/images/nba_login_logo@2x.png';

const LogoComponent = () => (
    <View style={{alignItems: 'center'}}>
        <Image
            source={LogoImage}
            resizeMode={'center'}
            style={{
                width: 170,
                height: 150
            }}
        />
    </View>
)

export default LogoComponent;