import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const SingleIngredient = (props) => {
  return (
    <View style={styles.item}>
        <View style={styles.itemContent}>
            <Text style={styles.itemNameText}>{ props.item.name.en } </Text>
            <Text style={styles.itemBodyText}>Food code: { props.item.ciqual_food_code.en }</Text>
            <Text style={styles.itemBodyText}>Carbon footprint: { props.item.carbon_footprint_fr_foodges_value.fr }</Text>
            <Text style={styles.itemBodyText}>Food code: { props.item.ciqual_food_code.en }</Text>
            <Text style={styles.itemBodyText}>Carbon footprint: { props.item.carbon_footprint_fr_foodges_value.fr }</Text>
            <Text style={styles.itemBodyText}>Food code: { props.item.ciqual_food_code.en }</Text>
            <Text style={styles.itemBodyText}>Carbon footprint: { props.item.carbon_footprint_fr_foodges_value.fr }</Text>
            <Text style={styles.itemBodyText}>Food code: { props.item.ciqual_food_code.en }</Text>
            <Text style={styles.itemBodyText}>Carbon footprint: { props.item.carbon_footprint_fr_foodges_value.fr }</Text>
            <Text style={styles.itemBodyText}>Food code: { props.item.ciqual_food_code.en }</Text>
            <Text style={styles.itemBodyText}>Carbon footprint: { props.item.carbon_footprint_fr_foodges_value.fr }</Text>
            <Text style={styles.itemBodyText}>Food code: { props.item.ciqual_food_code.en }</Text>
            <Text style={styles.itemBodyText}>Carbon footprint: { props.item.carbon_footprint_fr_foodges_value.fr }</Text>
            <Text style={styles.itemBodyText}>Food code: { props.item.ciqual_food_code.en }</Text>
            <Text style={styles.itemBodyText}>Carbon footprint: { props.item.carbon_footprint_fr_foodges_value.fr }</Text>
            <Text style={styles.itemBodyText}>Food code: { props.item.ciqual_food_code.en }</Text>
            <Text style={styles.itemBodyText}>Carbon footprint: { props.item.carbon_footprint_fr_foodges_value.fr }</Text>
            <Text style={styles.itemBodyText}>Food code: { props.item.ciqual_food_code.en }</Text>
            <Text style={styles.itemBodyText}>Carbon footprint: { props.item.carbon_footprint_fr_foodges_value.fr }</Text>
            <Text style={styles.itemBodyText}>Food code: { props.item.ciqual_food_code.en }</Text>
            <Text style={styles.itemBodyText}>Carbon footprint: { props.item.carbon_footprint_fr_foodges_value.fr }</Text>
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