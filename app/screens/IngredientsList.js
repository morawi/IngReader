import React from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import SingleIngredient from "./SingleIngredient";

// import ingredientsListData from "../../server/static/ingredients.json";

// console.log(ingredientsListData)

const IngredientsList = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.ingredientWrapper}>
            <Text style={styles.sectionTitle}>All Ingredients</Text>
            <View style={styles.items}>
              {DATA.map((item, index) => (
                <View key={index}>
                  {/* <ListItem.Content> */}
                  <SingleIngredient item={item}></SingleIngredient>
                </View>
              ))}
            </View>
        </View>
      </ScrollView>

      <View style={styles.footerContainer}>
        <KeyboardAvoidingView behavior={Platform.os === 'ios' ? "padding" : "height"}  style={styles.footerContent}>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('CameraScreen')}>
              <Text style={{ fontSize: 18, color: 'blue' }}>Home</Text>
            </TouchableOpacity>

          </View>
        </KeyboardAvoidingView>
      </View>


    </View>

  );
};

const DATA = 
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
    }
];


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  ingredientWrapper: {
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginVertical: 30,
  },
  footerContainer:{
    position: "absolute",
    bottom: 40,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  footerContent:{
    backgroundColor: 'white',
    paddingHorizontal: 20,
    position: "absolute",
    paddingBottom: 20,
    // paddingTop: 40,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  }

});

export default IngredientsList;






// import * as React from "react";
// import { View, TouchableOpacity, StyleSheet, Linking, Platform } from 'react-native';

// // Import the ingredients JSON object
// import { Text, ListItem, Icon } from '@rneui/themed';

// const IngredientsList = () => {
//   return (
//     <View style={{paddingVertical: 30, paddingHorizontal: 5}}>
//       <Text h3 style={{paddingVertical: 10}}>Ingredients List</Text>
//       {DATA.map((item, index) => (
//         <ListItem key={index} bottomDivider>
//           <ListItem.Content>
//             <ListItem.Title>
//               {item.name.en}
//             </ListItem.Title>
//             <ListItem.Subtitle style={styles.ingredientsListItemQuantity}>
//               Ciqual food code: {item.ciqual_food_code.en}
//             </ListItem.Subtitle>
//             <ListItem.Subtitle style={styles.ingredientsListItemQuantity}>
//               Carbon footprint: {item.carbon_footprint_fr_foodges_value.fr}
//             </ListItem.Subtitle>
//           </ListItem.Content>
//         </ListItem>
//       ))}
//     </View>

//   );
// };

// const styles = StyleSheet.create({
// });

// const DATA = 
//    [
//     {
//       children: [
//         'en:baked-onion',
//         'en:dehydrated-onion',
//         'en:fresh-onions',
//         'en:fried-onion',
//         'en:onion-extract',
//         'en:onion-pieces',
//         'en:onion-puree',
//         'en:onion-sproute',
//         'en:pearl-onion',
//         'en:pre-fried-onions',
//         'en:red-onion',
//         'en:rehydrated-onion',
//         'en:roscoff-onions',
//         'en:small-white-onions',
//         'en:spring-onion',
//         'en:welsh-onion',
//         'en:white-onion',
//         'en:yellow-onion',
//         'fr:jus-d-oignon-concentre',
//         'fr:oignon-et-ail-en-poudre',
//         'fr:oignon-fume-en-poudre',
//         'fr:oignon-semoule',
//         'fr:oignons-coupes',
//         'fr:oignons-eminces',
//         'fr:oignons-en-morceaux',
//         'fr:oignons-grilles-en-poudre',
//         'fr:oignons-rissoles'
//       ],
//       ciqual_food_code: { en: '20034' },
//       carbon_footprint_fr_foodges_ingredient: { fr: 'Oignons' },
//       ciqual_food_name: { fr: 'Oignon, cru', en: 'Onion, raw' },
//       name: {
//         en: 'Onion',
//         cy: 'Nionyn',
//         zh: '洋葱',
//         ru: 'Лук',
//         it: 'Cipolla',
//         nl: 'Ui',
//         lt: 'Svogūnai',
//         cs: 'Cibule',
//         el: 'Κρεμμύδι',
//         is: 'Laukur',
//         tr: 'Soğan',
//         de: 'Zwiebel',
//         es: 'Cebolla',
//         hr: 'Luk',
//         vi: 'Hành tây',
//         eo: 'Cepo',
//         hu: 'Hagyma',
//         bg: 'Лук',
//         eu: 'Tipula',
//         bn: 'পিঁয়াজ',
//         ja: 'タマネギ',
//         nb: 'Løk',
//         pl: 'Cebula',
//         sv: 'Lök',
//         uk: 'Цибуля',
//         nv: 'Tłʼohchin',
//         et: 'Sibul',
//         da: 'Løg',
//         pt: 'Cebola',
//         ro: 'Ceapă',
//         fr: 'Oignon',
//         io: 'Onyono',
//         no: 'Løk',
//         ar: 'بصل',
//         ca: 'Ceba',
//         fi: 'Sipuli',
//         he: 'בצל',
//         lv: 'Sīpoli'
//       },
//       wikidata: { en: 'Q3406628' },
//       carbon_footprint_fr_foodges_value: { fr: '0.6' },
//       parents: [ 'en:root-vegetable' ]
//     },
//     {
//       parents: [ 'en:root-vegetable' ],
//       carbon_footprint_fr_foodges_value: { fr: '0.3' },
//       wikidata: { en: 'Q81' },
//       name: {
//         pl: 'Marchew uprawna',
//         ug: 'سەۋزە',
//         my: 'မုန်လာဥနီ',
//         mr: 'गाजर',
//         sv: 'Morot',
//         uk: 'Морква',
//         ga: 'Cairéad',
//         tk: 'Käşir',
//         jv: 'Wortel',
//         et: 'Porgand',
//         sw: 'Karoti',
//         ms: 'Lobak merah',
//         ja: 'ニンジン',
//         hy: 'Գազար',
//         nb: 'Gulrot',
//         dv: 'ކެރެޓް',
//         kn: 'ಗಜ್ಜರಿ',
//         si: 'කැරට්',
//         he: 'גזר',
//         lv: 'Burkāns',
//         sr: 'Шаргарепа',
//         id: 'Wortel',
//         bi: 'Karot',
//         ro: 'Morcov',
//         io: 'Karoto',
//         rw: 'Ikaroti',
//         fi: 'Porkkana',
//         br: 'Karotez',
//         mn: 'Лууван',
//         az: 'Yerkökü',
//         gn: 'Sanaória',
//         rn: 'Ikaroti',
//         ur: 'گاجر',
//         lt: 'Morkos',
//         qu: 'Sanurya',
//         ky: 'Сабиз',
//         gl: 'Cenoria',
//         te: 'కారెట్',
//         kk: 'Сәбіз',
//         uz: 'Sabzi',
//         nn: 'Gulrot',
//         en: 'Carrot',
//         cy: 'Moronen',
//         xh: 'Umnqathe',
//         it: 'Carota',
//         co: 'Rundonu',
//         tl: 'Karot',
//         li: 'Moeër',
//         nl: 'Wortel',
//         oc: 'Pastenaga',
//         vi: 'Cà rốt',
//         ka: 'სტაფილო',
//         eo: 'Karoto',
//         ml: 'കാരറ്റ്',
//         bg: 'Морков',
//         eu: 'Azenario',
//         is: 'Gulrót',
//         fa: 'هویج',
//         gv: 'Carradje',
//         ba: 'Кишер',
//         es: 'Zanahoria',
//         be: 'Морква',
//         sl: 'Navadno korenje',
//         ht: 'Karòt',
//         sm: 'Taloti',
//         lo: 'ຫົວຜັກກາດເຫຼືອງ',
//         sk: 'Mrkva obyčajná',
//         lb: 'Muert',
//         nv: 'Chąąshtʼezhiitsoh',
//         da: 'Gulerødder',
//         am: 'ካሮት',
//         bn: 'গাজর',
//         ku: 'Гӧрдкушман',
//         za: 'Lauxbaeghoengz',
//         ko: '당근',
//         or: 'ଗାଜର',
//         wa: 'Raecene',
//         bo: 'ལབ་སེར།',
//         mk: 'Морков',
//         su: 'Wortel',
//         th: 'แคร์รอต',
//         fr: 'Carotte',
//         pt: 'Cenoura',
//         bs: 'Mrkva',
//         ca: 'Pastanaga',
//         ar: 'جَزَر',
//         sc: 'Fostinaja',
//         cs: 'Mrkev',
//         ne: 'गाजर',
//         ti: 'ካሮቲ',
//         sq: 'Karrotë',
//         el: 'Καρότο',
//         hi: 'गाजर',
//         os: 'Уырыдзы',
//         af: 'Wortel',
//         zh: '胡萝卜',
//         ru: 'Морковь',
//         pa: 'ਗਾਜਰ',
//         hr: 'Mrkva',
//         sa: 'गृञ्जनकम्',
//         hu: 'Sárgarépa',
//         ta: 'மஞ்சள் முள்ளங்கி',
//         tg: 'Сабзӣ',
//         tr: 'Havuç',
//         de: 'Karotten',
//         sh: 'Mrkva',
//         so: 'Kaaroot'
//       },
//       ciqual_food_name: { fr: 'Carotte, crue', en: 'Carrot, raw' },
//       ciqual_food_code: { en: '20009' },
//       carbon_footprint_fr_foodges_ingredient: { fr: 'Carottes fraîches' },
//       children: [
//         'de:karottengranulat',
//         'de:karottenpulver',
//         'en:baby-carrots',
//         'en:black-carrot',
//         'en:carrot-extract',
//         'en:carrot-juice',
//         'en:carrot-puree',
//         'en:cooked-carrot',
//         'en:dried-carrot',
//         'en:orange-carrot',
//         'en:organic-carrots',
//         'en:yellow-carrot',
//         'fr:carottes-deshydratees',
//         'fr:carottes-en-morceaux',
//         'fr:carottes-en-rondelles',
//         'fr:carottes-rapees',
//         'fr:concentre-d-hibiscus-et-de-carotte',
//         'fr:concentre-de-carotte',
//         'fr:concentre-de-carotte-et-de-citrouille',
//         'fr:fibre-de-carotte',
//         'nl:winterpeen'
//       ]
//     }
// ];

// export default IngredientsList;
