import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import AppText from '../AppText/index';

import colors from '../../config/colors';

export default function ListItem({ title, subTitle, image, onPress }) {
    return (
        <TouchableHighlight
            underlayColor={colors.light}
            onPress={onPress}
        >
            <View style={styles.container} >
                <Image style={styles.image} source={image} />
                <View>
                    <AppText style={styles.title} >{title}</AppText>
                    <AppText style={styles.subTitle} >{subTitle}</AppText>
                </View>
            </View>
        </TouchableHighlight>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 20,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 15,
    },
    subTitle: {
        color: colors.medium,
    },
    title: {
        fontWeight: '500',
    },
})