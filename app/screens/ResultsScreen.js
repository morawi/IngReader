import * as React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

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

const Divider = () => {
    return (
      <View
        style={{
          height: 2,
          width: "100%",
          backgroundColor: 'cadetblue',
        }}
      />
    );
  }
  
const ResultsScreen = () => {

  return (
    <SafeAreaView style={styles.MainContainer}>
      <ScrollView>

        {

          DATA.map((item, key) => (

            <TouchableOpacity key={key} >

              <Text style={styles.text} > Ingredient : {item.name.en} </Text>

              <Text style={styles.text} > Ingredient Code : {item.ciqual_food_code.en} </Text>

              <Text style={styles.text} > Carbon Footprint Value : {item.carbon_footprint_fr_foodges_value.fr} </Text>

              
              <Divider />

            </TouchableOpacity>

          ))
        }

      </ScrollView>

    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  resultsScreen: {
    position: "absolute",
    top: 370,
    left: 75,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.aBeeZeeRegular,
    color: Color.white,
    textAlign: "left",
  },
  resultsscreen: {
    backgroundColor: "#cfc564",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default ResultsScreen;
