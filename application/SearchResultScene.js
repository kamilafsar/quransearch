var React = require('react-native');
var {
  StyleSheet,
  ListView,
  Text,
  View,
  TouchableHighlight,
  ScrollView
} = React;

var SuraScene = require('./SuraScene')

var SearchResultScene = React.createClass({

  getInitialState() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => (r1.sura + r1.aya) !== (r2.sura + r2.aya) });
    return {
      dataSource: ds.cloneWithRows(searchResult),
    };
  },

  render() {
      return (
        <ScrollView style={styles.screen}>
          <ListView
            style={styles.container}
            dataSource={this.state.dataSource}
            renderRow={this.renderRow}
          />
      </ScrollView>
      );
  },

  renderRow(result) {
    return (
      <View style={styles.result}>
        <View style={styles.resultPayload}>
          <Text style={styles.resultText}>{result.text}</Text>
          <View style={styles.resultMeta}>
            <Text style={styles.resultSura}>{result.sura}</Text>
            <Text style={styles.resultAya}>{result.aya}</Text>
          </View>
        </View>
        <TouchableHighlight  style={styles.resultButton} onPress={this.navigateToResult}>
          <Text>go</Text>
        </TouchableHighlight>
      </View>
    );
  },

  navigateToResult() {
    this.props.navigator.push({
         name: 'SuraScene',
         component: SuraScene
     });
  },

});

var styles = StyleSheet.create({
  screen: {
    marginTop: 20,
    backgroundColor: '#ffffff',
    paddingHorizontal: 5,
  },
  container: {
  },
    result: {
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomWidth: 1
    },

    resultPayload: {
      flex: 0.95,
      padding: 5
    },

      resultText: {
      },

      resultMeta: {
        flexDirection: 'row',
        paddingTop: 5
      },

        resultSura: {
          marginRight: 5,
          color: '#a0a0a0',
          fontSize: 11
        },
        resultAya: {
          color: '#a0a0a0',
          fontSize: 11
        },

    resultButton: {
      flex: 0.05,
    },

});


var searchResult = [
{sura: "Bakara", aya: 3, text: "Onlar gaybe inanırlar, namazı dosdoğru kılarlar, kendilerine rızık olarak verdiğimizden de Allah yolunda harcarlar."},
{sura: "Bakara", aya: 43, text: "namazı kılın, zekatı verin. Rükû edenlerle birlikte siz de rükû edin."},
{sura: "Bakara", aya: 45, text: "Sabrederek ve namaz kılarak (Allah'tan) yardım dileyin. Şüphesiz namaz, Allah'a derinden saygı duyanlardan başkasına ağır gelir."},
{sura: "Bakara", aya: 83, text: "Hani, biz İsrailoğulları'ndan, \"Allah'tan başkasına ibadet etmeyeceksiniz, anne babaya, yakınlara, yetimlere, yoksullara iyilik edeceksiniz, herkese güzel sözler söyleyeceksiniz, namazı kılacaksınız, zekatı vereceksiniz\" diye söz almıştık. Sonra pek azınız hariç, yüz çevirerek sözünüzden döndünüz."},
{sura: "Bakara", aya: 110, text: "namazı dosdoğru kılın, zekâtı verin. Kendiniz için her ne iyilik işlemiş olursanız, Allah katında onu bulursunuz. Şüphesiz Allah bütün yaptıklarınızı görür."},
{sura: "Bakara", aya: 125, text: "Hani, biz Kâbe'yi insanlara toplantı ve güven yeri kılmıştık. Siz de Makam-ı İbrahim'den kendinize bir namaz yeri edinin. İbrahim ve İsmail'e şöyle emretmiştik: \"Tavaf edenler, kendini ibadete verenler, rukû ve secde edenler için evimi (Kâbe'yi) tertemiz tutun.\""},
{sura: "Bakara", aya: 153, text: "Ey iman edenler! Sabrederek ve namaz kılarak Allah'tan yardım dileyin. Şüphe yok ki Allah sabredenlerle beraberdir."},
{sura: "Bakara", aya: 177, text: "İyilik, yüzlerinizi doğu ve batı taraflarına çevirmeniz(den ibaret) değildir. Asıl iyilik, Allah'a, ahiret gününe, meleklere, kitap ve peygamberlere iman edenlerin; mala olan sevgilerine rağmen, onu yakınlara, yetimlere, yoksullara, yolda kalmışa, (ihtiyacından dolayı) isteyene ve (özgürlükleri için) kölelere verenlerin; namazı dosdoğru kılan, zekâtı veren, antlaşma yaptıklarında sözlerini yerine getirenlerin ve zorda, hastalıkta ve savaşın kızıştığı zamanlarda (direnip) sabredenlerin tutum ve davranışlarıdır. İşte bunlar, doğru olanlardır. İşte bunlar, Allah'a karşı gelmekten sakınanların ta kendileridir."},
{sura: "Bakara", aya: 238, text: "namazlara ve orta namaza devam edin. Allah'a gönülden boyun eğerek namaza durun."},
{sura: "Bakara", aya: 239, text: "Eğer (bir tehlikeden) korkarsanız, namazı yaya olarak veya binek üzerinde kılın. Güvenliğe kavuşunca da, Allah'ı, daha önce bilmediğiniz ve onun size öğrettiği şekilde anın (namazı normal vakitlerdeki gibi kılın)."},
{sura: "Bakara", aya: 277, text: "Şüphesiz iman edip salih ameller işleyen, namazı dosdoğru kılan ve zekatı verenlerin mükafatları Rableri katındadır. Onlara korku yoktur. Onlar mahzun da olmayacaklardır."},
{sura: "Al-i İmran", aya: 39, text: "Zekeriya mabedde namaz kılarken melekler ona, \"Allah sana, kendisinden gelen bir kelimeyi (İsa'yı) doğrulayıcı, efendi, nefsine hakim ve salihlerden bir peygamber olarak Yahya'yı müjdeler\" diye seslendiler."},
{sura: "Nisa", aya: 43, text: "Ey iman edenler! Sarhoş iken ne söylediğinizi bilinceye kadar, bir de -yolcu olmanız durumu müstesna- cünüp iken yıkanıncaya kadar namaza yaklaşmayın. Eğer hasta olur veya yolculukta bulunursanız, veyahut biriniz abdest bozmaktan gelince ya da eşlerinizle cinsel ilişkide bulunup, su da bulamazsanız o zaman temiz bir toprağa yönelip, (niyet ederek onunla) yüzlerinizi ve ellerinizi meshedin. Şüphesiz Allah çok affedicidir, çok bağışlayıcıdır."},
{sura: "Nisa", aya: 77, text: "Daha önce kendilerine, \"(savaşmaktan) ellerinizi çekin, namazı kılın, zekâtı verin\" denilenleri görmedin mi? Üzerlerine savaş yazılınca hemen içlerinden bir kısmı; insanlardan, Allah'tan korkar gibi, hatta daha çok korkarlar ve \"Rabbimiz! Niçin bize savaş yazdın? Bizi yakın bir zamana kadar erteleseydin ya!\" derler. De ki: \"Dünya geçimliği azdır. Ahiret, Allah'a karşı gelmekten sakınan kimse için daha hayırlıdır. Size kıl kadar haksızlık edilmez.\""},
{sura: "Nisa", aya: 101, text: "Yeryüzünde sefere çıktığınız vakit kâfirlerin size saldırmasından korkarsanız, namazı kısaltmanızdan ötürü size bir günah yoktur. Şüphesiz kâfirler sizin apaçık düşmanınızdır."},
{sura: "Nisa", aya: 102, text: "(Ey Muhammed!) Cephede sen de onların (mü'minlerin) arasında bulunup da onlara namaz kıldırdığın vakit, içlerinden bir kısmı seninle beraber namaza dursun. Silahlarını da yanlarına alsınlar. Bunlar secdeye vardıklarında (bir rekat kıldıklarında) arkanıza (düşman karşısına) geçsinler. Sonra o namaz kılmamış olan diğer kısım gelsin, seninle beraber kılsınlar ve ihtiyatlı bulunsunlar, silahlarını yanlarına alsınlar. İnkar edenler arzu ederler ki, silahlarınızdan ve eşyanızdan bir gafil olsanız da size ani bir baskın yapsalar. Yağmurdan zahmet çekerseniz, ya da hasta olursanız, silahlarınızı bırakmanızda size bir beis yoktur. Bununla birlikte ihtiyatlı olun (tedbirinizi alın). Şüphesiz Allah inkarcılara alçaltıcı bir azap hazırlamıştır."},
{sura: "Nisa", aya: 103, text: "namazı kıldınız mı, gerek ayakta, gerek otururken ve gerek yan yatarak hep Allah'ı anın. Güvene kavuştunuz mu namazı tam olarak kılın. Çünkü namaz, mü'minlere belirli vakitlere bağlı olarak farz kılınmıştır."},
{sura: "Nisa", aya: 142, text: "Münafıklar, Allah'ı aldatmaya çalışırlar. Allah da onların bu çabalarını başlarına geçirir. Onlar, namaza kalktıkları zaman tembel tembel kalkarlar, insanlara gösteriş yaparlar ve Allah'ı pek az anarlar."},
{sura: "Nisa", aya: 162, text: "Fakat onlardan ilimde derinleşmiş olanlar ve mü'minler, sana indirilene ve senden önce indirilene iman ederler. O namazı kılanlar, zekatı verenler, Allah'a ve ahiret gününe inananlar var ya, işte onlara büyük bir mükâfat vereceğiz."},
{sura: "Maide", aya: 6, text: "Ey iman edenler! namaza kalkacağınız zaman yüzlerinizi, dirseklere kadar ellerinizi ve -başlarınıza mesh edip- her iki topuğa kadar da ayaklarınızı yıkayın. Eğer cünüp iseniz iyice yıkanarak temizlenin. Hasta olursanız veya seferde bulunursanız veya biriniz abdest bozmaktan (def-i hacetten) gelir veya kadınlara dokunur (cinsel ilişkide bulunur) da su bulamazsanız, o zaman temiz bir toprağa yönelin. Onunla yüzlerinizi ve ellerinizi meshedin (Teyemmüm edin). Allah size herhangi bir güçlük çıkarmak istemez. Fakat o sizi tertemiz yapmak ve üzerinizdeki nimetini tamamlamak ister ki şükredesiniz."},
];


module.exports = SearchResultScene;
