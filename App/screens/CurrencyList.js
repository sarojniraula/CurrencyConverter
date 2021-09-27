import React, {useContext} from "react";
import { StatusBar, FlatList, View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Entypo";

import colors from "../constants/colors";
import currencies from "../data/currencies.json";
import { RowItem, RowSeparator } from "../components/rowitem";
import { ConversionContext } from "../util/ConversionContext";

const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30,
        backgroundColor: colors.blue,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center"
    }
})

export default ({navigation, route = {} }) => {
    const insets = useSafeAreaInsets();
    const {
        baseCurrency,
        quoteCurrency,
        setBaseCurrency,
        setQuoteCurrency,
    } = useContext(ConversionContext);

    const params = route.params || {};
    const {isBaseCurrency} = params;
    
    return (
        <View style={{backgroundColor: colors.white}}>
            <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
            <FlatList 
                data={currencies}
                renderItem={({item}) => {
                    let selected = false;

                    if (isBaseCurrency && item === baseCurrency) {
                        selected = true;
                    } else if (!isBaseCurrency && item === quoteCurrency) {
                        selected = true;
                    }

                    return (
                        <RowItem 
                            title={item} 
                            onPress={() => {
                                if (isBaseCurrency) {
                                    setBaseCurrency(item);
                                } else {
                                    setQuoteCurrency(item);
                                }
                                navigation.pop();
                            }}
                            rightIcon={
                                selected && (
                                    <View style={styles.icon}>
                                        <Icon name="check" size={20} color={colors.white} />
                                    </View>
                                )
                            } 
                        />
                    );
                }}
                keyExtractor={(item) => item}
                ItemSeparatorComponent={() => <RowSeparator />}
                ListFooterComponent={() => (
                <View style={{paddingBottom: insets.bottom}} />
                )}
            />
        </View>
    );
};