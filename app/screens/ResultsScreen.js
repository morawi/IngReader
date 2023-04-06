import React, {useEffect} from 'react';
import {ImageBackground ,View, SafeAreaView, StyleSheet, Text,ScrollView,TouchableOpacity, Platform, UIManager, Pressable,Button} from 'react-native';
import {AccordionItem} from '../../node_modules/react-native-accordion-list-view';
import { Entypo } from '../../node_modules/@expo/vector-icons'; 
import {NavigationContainer, TabActions} from '../../node_modules/@react-navigation/native';
import {createBottomTabNavigator} from '../../node_modules/@react-navigation/bottom-tabs';
import { Ionicons } from '../../node_modules/@expo/vector-icons';


import HomeScreen from './HomeScreen';
import IngredientsList from './IngredientsList';

//Screen names
const homeName = "Home";
const searchName = "Search";



const App = () => {
  const data = 
    [
      {
        children: [
          'en:baked-onion',
          'en:dehydrated-onion',
          'en:fresh-onions',
          'en:fried-onion',
          'en:onion-extract',
          'en:onion-pieces',
          'en:onion-puree',
          'en:onion-sproute',
          'en:pearl-onion',
          'en:pre-fried-onions',
          'en:red-onion',
          'en:rehydrated-onion',
          'en:roscoff-onions',
          'en:small-white-onions',
          'en:spring-onion',
          'en:welsh-onion',
          'en:white-onion',
          'en:yellow-onion',
          'fr:jus-d-oignon-concentre',
          'fr:oignon-et-ail-en-poudre',
          'fr:oignon-fume-en-poudre',
          'fr:oignon-semoule',
          'fr:oignons-coupes',
          'fr:oignons-eminces',
          'fr:oignons-en-morceaux',
          'fr:oignons-grilles-en-poudre',
          'fr:oignons-rissoles'
        ],
        ciqual_food_code: { en: '20034' },
        carbon_footprint_fr_foodges_ingredient: { fr: 'Oignons' },
        ciqual_food_name: { fr: 'Oignon, cru', en: 'Onion, raw' },
        name: {
          en: 'Onion',
          cy: 'Nionyn',
          zh: '洋葱',
          ru: 'Лук',
          it: 'Cipolla',
          nl: 'Ui',
          lt: 'Svogūnai',
          cs: 'Cibule',
          el: 'Κρεμμύδι',
          is: 'Laukur',
          tr: 'Soğan',
          de: 'Zwiebel',
          es: 'Cebolla',
          hr: 'Luk',
          vi: 'Hành tây',
          eo: 'Cepo',
          hu: 'Hagyma',
          bg: 'Лук',
          eu: 'Tipula',
          bn: 'পিঁয়াজ',
          ja: 'タマネギ',
          nb: 'Løk',
          pl: 'Cebula',
          sv: 'Lök',
          uk: 'Цибуля',
          nv: 'Tłʼohchin',
          et: 'Sibul',
          da: 'Løg',
          pt: 'Cebola',
          ro: 'Ceapă',
          fr: 'Oignon',
          io: 'Onyono',
          no: 'Løk',
          ar: 'بصل',
          ca: 'Ceba',
          fi: 'Sipuli',
          he: 'בצל',
          lv: 'Sīpoli'
        },
        wikidata: { en: 'Q3406628' },
        carbon_footprint_fr_foodges_value: { fr: '0.6' },
        parents: [ 'en:root-vegetable' ]
      },
      {
        parents: [ 'en:root-vegetable' ],
        carbon_footprint_fr_foodges_value: { fr: '0.3' },
        wikidata: { en: 'Q81' },
        name: {
          pl: 'Marchew uprawna',
          ug: 'سەۋزە',
          my: 'မုန်လာဥနီ',
          mr: 'गाजर',
          sv: 'Morot',
          uk: 'Морква',
          ga: 'Cairéad',
          tk: 'Käşir',
          jv: 'Wortel',
          et: 'Porgand',
          sw: 'Karoti',
          ms: 'Lobak merah',
          ja: 'ニンジン',
          hy: 'Գազար',
          nb: 'Gulrot',
          dv: 'ކެރެޓް',
          kn: 'ಗಜ್ಜರಿ',
          si: 'කැරට්',
          he: 'גזר',
          lv: 'Burkāns',
          sr: 'Шаргарепа',
          id: 'Wortel',
          bi: 'Karot',
          ro: 'Morcov',
          io: 'Karoto',
          rw: 'Ikaroti',
          fi: 'Porkkana',
          br: 'Karotez',
          mn: 'Лууван',
          az: 'Yerkökü',
          gn: 'Sanaória',
          rn: 'Ikaroti',
          ur: 'گاجر',
          lt: 'Morkos',
          qu: 'Sanurya',
          ky: 'Сабиз',
          gl: 'Cenoria',
          te: 'కారెట్',
          kk: 'Сәбіз',
          uz: 'Sabzi',
          nn: 'Gulrot',
          en: 'Carrot',
          cy: 'Moronen',
          xh: 'Umnqathe',
          it: 'Carota',
          co: 'Rundonu',
          tl: 'Karot',
          li: 'Moeër',
          nl: 'Wortel',
          oc: 'Pastenaga',
          vi: 'Cà rốt',
          ka: 'სტაფილო',
          eo: 'Karoto',
          ml: 'കാരറ്റ്',
          bg: 'Морков',
          eu: 'Azenario',
          is: 'Gulrót',
          fa: 'هویج',
          gv: 'Carradje',
          ba: 'Кишер',
          es: 'Zanahoria',
          be: 'Морква',
          sl: 'Navadno korenje',
          ht: 'Karòt',
          sm: 'Taloti',
          lo: 'ຫົວຜັກກາດເຫຼືອງ',
          sk: 'Mrkva obyčajná',
          lb: 'Muert',
          nv: 'Chąąshtʼezhiitsoh',
          da: 'Gulerødder',
          am: 'ካሮት',
          bn: 'গাজর',
          ku: 'Гӧрдкушман',
          za: 'Lauxbaeghoengz',
          ko: '당근',
          or: 'ଗାଜର',
          wa: 'Raecene',
          bo: 'ལབ་སེར།',
          mk: 'Морков',
          su: 'Wortel',
          th: 'แคร์รอต',
          fr: 'Carotte',
          pt: 'Cenoura',
          bs: 'Mrkva',
          ca: 'Pastanaga',
          ar: 'جَزَر',
          sc: 'Fostinaja',
          cs: 'Mrkev',
          ne: 'गाजर',
          ti: 'ካሮቲ',
          sq: 'Karrotë',
          el: 'Καρότο',
          hi: 'गाजर',
          os: 'Уырыдзы',
          af: 'Wortel',
          zh: '胡萝卜',
          ru: 'Морковь',
          pa: 'ਗਾਜਰ',
          hr: 'Mrkva',
          sa: 'गृञ्जनकम्',
          hu: 'Sárgarépa',
          ta: 'மஞ்சள் முள்ளங்கி',
          tg: 'Сабзӣ',
          tr: 'Havuç',
          de: 'Karotten',
          sh: 'Mrkva',
          so: 'Kaaroot'
        },
        ciqual_food_name: { fr: 'Carotte, crue', en: 'Carrot, raw' },
        ciqual_food_code: { en: '20009' },
        carbon_footprint_fr_foodges_ingredient: { fr: 'Carottes fraîches' },
        children: [
          'de:karottengranulat',
          'de:karottenpulver',
          'en:baby-carrots',
          'en:black-carrot',
          'en:carrot-extract',
          'en:carrot-juice',
          'en:carrot-puree',
          'en:cooked-carrot',
          'en:dried-carrot',
          'en:orange-carrot',
          'en:organic-carrots',
          'en:yellow-carrot',
          'fr:carottes-deshydratees',
          'fr:carottes-en-morceaux',
          'fr:carottes-en-rondelles',
          'fr:carottes-rapees',
          'fr:concentre-d-hibiscus-et-de-carotte',
          'fr:concentre-de-carotte',
          'fr:concentre-de-carotte-et-de-citrouille',
          'fr:fibre-de-carotte',
          'nl:winterpeen'
        ]
      },
      {
        wikidata: { en: 'Q11002' },
        vegetarian: { en: 'yes' },
        carbon_footprint_fr_foodges_value: { fr: '1.3' },
        vegan: { en: 'yes' },
        parents: [ 'en:disaccharide' ],
        carbon_footprint_fr_foodges_ingredient: { fr: 'Sucre de canne' },
        children: [
          'en:beet-sugar',
          'en:brown-sugar',
          'en:candy-sugar',
          'en:cane-sugar',
          'en:caramelised-sugar',
          'en:caramelised-sugar-syrup',
          'en:caster-sugar',
          'en:fermented-sugar',
          'en:granulated-sugar',
          'en:icing-sugar',
          'en:liquid-sugar',
          'en:maltose',
          'en:melado',
          'en:molasses',
          'en:muscovado',
          'en:nib-sugar',
          'en:organic-sugar',
          'en:palm-sugar',
          'en:sucrose',
          'en:sugar-cube',
          'en:sugared',
          'en:trehalose',
          'en:unrefined-sugar',
          'en:vanilla-sugar',
          'en:white-sugar',
          'fr:sucre-blond',
          'fr:sucre-candi',
          'fr:sucre-caramelise-en-poudre',
          'fr:sucre-vanilline',
          'fr:sucres-extraits-de-fruits',
          'nl:arenga-bossuiker'
        ],
        name: {
          lt: 'Cukrus',
          ur: 'شکّر',
          bh: 'चीनी',
          ky: 'Кант',
          gl: 'Azucre',
          qu: 'Asukar',
          te: 'చక్కెర',
          nn: 'Sukker',
          uz: 'Qand',
          kk: 'Қант',
          cy: 'Siwgr',
          en: 'Sugar',
          it: 'Zucchero',
          ln: 'Sukáli',
          nl: 'Suiker',
          li: 'Sókker',
          tl: 'Asukal',
          vi: 'Đường',
          ka: 'შაქარი',
          oc: 'Sucre',
          ml: 'പഞ്ചസാര',
          eo: 'Sukero',
          ce: 'Шекар',
          bg: 'Захар',
          eu: 'Azukre',
          tt: 'Шикәр',
          is: 'Sykur',
          fa: 'شکر',
          sl: 'Sladkor',
          be: 'Цукар',
          ht: 'Sik',
          ba: 'Шәкәр',
          cv: 'Сахăр',
          es: 'Azúcar',
          ug: 'شېكەر',
          pl: 'Cukier',
          sv: 'Socker',
          my: 'သကြား',
          jv: 'Gula',
          uk: 'Цукор',
          ga: 'Siúcra',
          et: 'Suhkur',
          ps: 'بوره',
          sw: 'Sukari',
          ms: 'Gula',
          ja: '砂糖',
          nb: 'Sukker',
          kn: 'ಸಕ್ಕರೆ',
          he: 'סוכר',
          si: 'සීනි',
          sr: 'Шећер',
          lv: 'Cukurs',
          id: 'Gula',
          ro: 'Zahăr',
          an: 'Zucre',
          az: 'Şəkər',
          mn: 'Элсэн чихэр',
          rw: 'Isukari',
          no: 'Sukker',
          fi: 'Sokeri',
          br: 'Sukr',
          gn: 'Eiratã',
          cs: 'Cukr',
          ne: 'चिनी',
          as: 'চেনী',
          gd: 'Siùcar',
          el: 'Ζάχαρη',
          sq: 'Sheqeri',
          hi: 'शर्करा',
          zh: '糖',
          af: 'Suikers',
          ru: 'Сахар',
          pa: 'ਸ਼ੱਕਰ',
          hr: 'Šećeri',
          hu: 'Cukor',
          sa: 'शर्करा',
          ta: 'சீனி',
          tg: 'Қанд',
          sn: 'Shuga',
          tr: 'Şeker',
          la: 'Saccharum',
          de: 'Zucker',
          sh: 'Šećer',
          so: 'Sonkor',
          sk: 'Cukor',
          nv: 'Áshįįh łikan',
          da: 'Sukker',
          am: 'ስኳር',
          bn: 'চিনি',
          ku: 'Şekir',
          iu: 'ᓱᑲᒃ',
          ko: '설탕',
          fy: 'Sûker',
          or: 'ଚିନି',
          wa: 'Souke',
          th: 'น้ำตาล',
          su: 'Gula',
          mk: 'Шеќер',
          bs: 'Šećer',
          sd: 'کنڊ',
          fr: 'Sucre',
          pt: 'Açúcar',
          ca: 'Sucre',
          ar: 'سكر'
        }
      },
      {
        parents: [ 'en:animal' ],
        vegan: { en: 'no' },
        name: {
          sv: 'Nötkött',
          pl: 'Wołowina',
          cs: 'Hovězí',
          hr: 'Goveđa',
          da: 'Oksekød',
          bg: 'Говедо',
          hu: 'Marha',
          ro: 'Vită',
          en: 'Beef',
          fr: 'Bœuf',
          zh: '牛',
          fi: 'Nauta',
          de: 'Rind',
          it: 'Manzo',
          ru: 'Говядина'
        },
        children: [
          'en:beef-bones',
          'en:beef-broth',
          'en:beef-casing',
          'en:beef-extract',
          'en:beef-gelatin',
          'en:beef-liver',
          'en:beef-meat',
          'en:braised-beef-short-ribs',
          'en:bresaola',
          'en:grass-fed-beef',
          'en:grilled-lean-beef-rib-steak',
          'en:oxtail',
          'en:pan-fried-lean-beef-rib-steak',
          'en:roasted-beef-including-beef-juices',
          'en:veal',
          'fr:jus-de-cuisson-de-viande-de-boeuf',
          'fr:pur-boeuf',
          'fr:sous-produit-du-boeuf'
        ],
        vegetarian: { en: 'no' }
      }
    ];

    
  const Tab = createBottomTabNavigator();

    


  useEffect(() => {
      if (Platform.OS === 'android') {
          if (UIManager.setLayoutAnimationEnabledExperimental) {
              UIManager.setLayoutAnimationEnabledExperimental(true);
          }
      }
  }, []);
  return (
      <ImageBackground style = {{
        resizeMode: 'stretch',}} source={require('../assets/ingreader_theme.png')} >
      
  <SafeAreaView>
    <ScrollView contentContainerStyle={styles.container}>
      <Pressable>
          <View style ={styles.box}>
            <Text style={styles.heading}>Found Ingredients:</Text> 
          </View> 
      {data.map(item => (
          <AccordionItem
            key={item.id}
            customTitle={() => <Text style={styles.text}> <Entypo name="leaf" size={24} color="green"/>{item.name.en}</Text>}
            customBody={() => <> 
            <Text style={styles.littleText}> The source of {item.name.en} is {item.parents} </Text>
            <Text style={styles.littleText}> Vegan: {item.vegan ? item.vegan.en : "Undefined"} </Text>
            <Text style={styles.littleText}> Vegtarian: {item.vegan ? item.vegetarian.en : "Undefined"} </Text>
            </>
          }
            animationDuration={400}
            isOpen={false}
            onPress={(isOpen) => console.log(isOpen)}
          />
        ))}
          </Pressable>
      </ScrollView>

      <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === searchName) {
              iconName = focused ? 'search' : 'search';

            } 

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'green',
          inactiveTintColor: 'gray',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70, bottom: 0}
        }}>

        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={searchName} component={IngredientsList} />
      </Tab.Navigator>
    </NavigationContainer>
      
    </SafeAreaView>
    
  </ImageBackground>
    
  );
};

export default App;
const styles = StyleSheet.create({
  box: { width: 450,
    height: 40,
    //width:400,
    justifyContent: 'left',
    alignItems: 'left',
    backgroundColor: '#83b354',
    margin: 10 
    } ,
  container: {
    paddingVertical: '2%',
    paddingHorizontal: '3%',
    height: '96.9%',
    justifyContent: "center",
  },
  text: {
    color: 'green',
    fontSize: 18,
  },
  littleText: {
    textAlign: 'left',
    color: 'black',
    justifyContent: 'left',
    fontSize : 15,
  },
  heading: {
    textAlign: 'left',
    color: 'black',
    fontStyle: 'italic',
    justifyContent: 'left',
    fontSize : 25,
  },
});

