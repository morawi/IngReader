import React, { useEffect } from 'react';
import { ImageBackground, StyleSheet, Text, ScrollView, Platform, UIManager, Pressable, View } from 'react-native';
import { AccordionItem } from '../../node_modules/react-native-accordion-list-view';
import { Entypo } from '../../node_modules/@expo/vector-icons';
import BottomNavigationBar from '../components/BottomNavigation';
import { BlurView } from 'expo-blur';
import { useRoute } from '@react-navigation/native';



const App = ({ navigation }) => {
    const route = useRoute();

    const data = route.params?.result;


    useEffect(() => {
        if (Platform.OS === 'android') {
            if (UIManager.setLayoutAnimationEnabledExperimental) {
                UIManager.setLayoutAnimationEnabledExperimental(true);
            }
        }
    }, []);
    return (
        <ImageBackground style={{
            resizeMode: 'cover',
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "#ffffff",
            padding: 0,
            margin: 0,
        }} source={require('../assets/ingreader_theme.png')} >
            <View>
                <Text style={styles.ingReaderText}>IngReader</Text>
                <BlurView intensity={80} tint="light" style={[styles.blurContainer, styles.box]}>
                    <Text style={styles.heading}>Found Ingredients:</Text>
                </BlurView>
            </View>
            <View style={[styles.container, styles.showableContent]}>
                <ScrollView contentContainerStyle={[styles.scrollViewContainer, styles.scrollViewCustom]} bounces={false}>
                    <Pressable>
                        {data.map(item => (
                            <AccordionItem
                                key={item.name.en}
                                customTitle={() => <Text key={1} style={styles.text}> <Entypo name="leaf" size={24} color="green" />{item.name.en}</Text>}
                                customBody={() => <>
                                    <Text key={2} style={styles.littleText}> The Source of {item.name.en} is {item.parents[0].charAt(3).toUpperCase()}{item.parents[0].substring(4)} </Text>
                                    <Text key={3} style={styles.littleText}> Vegan: {item.vegan ? item.vegan.en : "Undefined"} </Text>
                                    <Text key={4} style={styles.littleText}> Vegtarian: {item.vegan ? item.vegetarian.en : "Undefined"} </Text>
                                </>
                                }
                                animationDuration={400}
                                isOpen={false}
                                onPress={(isOpen) => console.log(isOpen)}
                            />
                        ))}
                    </Pressable>
                </ScrollView>
            </View>
            <BottomNavigationBar />
        </ImageBackground>

    );
};

export default App;
const styles = StyleSheet.create({
    box: {
        borderRadius: 20,
        overflow: 'hidden',
        margin: 10,
    },

    scrollViewCustom: {
        padding: 0,
        margin: 0,
    },

    showableContent: {
        height: '60%',
        overflow: 'hidden',
        padding: 0,
        margin: 0,
        top: 0,
    },

    container: {
        paddingVertical: '2%',
        paddingHorizontal: '3%',
        height: '90%',
        display: "flex",
        flexDirection: "column",
        top: "10%",

    },
    text: {
        color: 'green',
        fontSize: 18,
    },
    ingReaderText: {
        fontSize: 30,
        color: 'black',
        marginBottom: "20%",
        fontFamily: "ABeeZee",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: '20%',

    },
    littleText: {
        textAlign: 'left',
        color: 'black',
        justifyContent: 'left',
        fontSize: 15,
    },
    heading: {
        textAlign: 'left',
        color: 'black',
        justifyContent: 'left',
        fontSize: 30,
        fontFamily: "LatoRegular",
        margin: 10,
        marginLeft: 15,
    },
});
