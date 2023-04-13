import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const SingleIngredient = (props) => {
    return (
        //rendering SingleIngredient view
        <View style={styles.item}>
            <View style={styles.itemContent}>
                <Text style={styles.itemNameText}>{props.item.name.en}</Text>
                {props.item.additives_classes && props.item.additives_classes.en &&
                    <Text style={styles.itemBodyText}>Additive Classes: {props.item.additives_classes.en.split(',').map(additive => additive.split(':')[1]).join(', ')}</Text>
                }
                {props.item.vegan && props.item.vegan.en &&
                    <Text style={styles.itemBodyText}>Vegan: {props.item.vegan.en}</Text>
                }
                {props.item.vegetarian && props.item.vegetarian.en &&
                    <Text style={styles.itemBodyText}>Vegetarian: {props.item.vegetarian.en}</Text>
                }
                {props.item.wikidata && props.item.wikidata.en &&
                    <Text style={styles.itemBodyText}>Wikidata: {props.item.wikidata.en}</Text>
                }
                {/* {props.item.parents && props.item.parents.en &&
                    <Text style={styles.itemBodyText}>Parents: {props.item.parents.en}</Text>
                } */}
                {props.item.parents && props.item.parents.length > 0 &&
                    <Text style={styles.itemBodyText}>Parents: {props.item.parents.map(p => p.replace('en:', '')).join(", ")}</Text>
                }

                {props.item.ciqual_food_name && props.item.ciqual_food_name.en &&
                    <Text style={styles.itemBodyText}>Ciqual Food Name: {props.item.ciqual_food_name.en}</Text>
                }
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    item:{
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemContent:{
        // flexDirection: 'row',
        // alignItems: 'center',
        flexWrap: 'wrap'
    },
    itemNameText:{
        fontSize: 24,
        fontWeight: 'bold',
        maxWidth: '100%',
    },
    itemBodyText:{
        maxWidth: '100%',
    },
});

export default SingleIngredient;