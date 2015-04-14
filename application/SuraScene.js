var React = require('react-native');
var {
  StyleSheet,
  ListView,
  Text,
  View,
  TouchableHighlight,
  ScrollView
} = React;

var SureScene = React.createClass({

  getInitialState() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2 });
    return {
      name: sura.name,
      dataSource: ds.cloneWithRows(sura.ayas),
    };
  },

  render() {
      return (
        <ScrollView style={styles.screen}>
          <Text style={styles.suraName}>{this.state.name}</Text>
          <ListView
            style={styles.cantainer}
            dataSource={this.state.dataSource}
            renderRow={this.renderAya}
          />
      </ScrollView>
      );
  },

  renderAya(aya, x, i) {
    return (
      <Text style={styles.aya}>{parseInt(i)+1}. {aya}</Text>
    );
  },

});

var styles = StyleSheet.create({
  screen: {
    marginTop: 20,
    backgroundColor: '#ffffff',
  },
  container: {
  },
  suraName: {
    fontSize: 20
  },
    aya: {
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomWidth: 1
    },

});

var sura = {
  name: "Bakara", ayas: [
    "Onlar gaybe inanırlar, namazı dosdoğru kılarlar, kendilerine rızık olarak verdiğimizden de Allah yolunda harcarlar.",
    "namazı kılın, zekatı verin. Rükû edenlerle birlikte siz de rükû edin.",
    "Sabrederek ve namaz kılarak (Allah'tan) yardım dileyin. Şüphesiz namaz, Allah'a derinden saygı duyanlardan başkasına ağır gelir.",
    "Hani, biz İsrailoğulları'ndan, \"Allah'tan başkasına ibadet etmeyeceksiniz, anne babaya, yakınlara, yetimlere, yoksullara iyilik edeceksiniz, herkese güzel sözler söyleyeceksiniz, namazı kılacaksınız, zekatı vereceksiniz\" diye söz almıştık. Sonra pek azınız hariç, yüz çevirerek sözünüzden döndünüz.",
    "namazı dosdoğru kılın, zekâtı verin. Kendiniz için her ne iyilik işlemiş olursanız, Allah katında onu bulursunuz. Şüphesiz Allah bütün yaptıklarınızı görür.",
    "Hani, biz Kâbe'yi insanlara toplantı ve güven yeri kılmıştık. Siz de Makam-ı İbrahim'den kendinize bir namaz yeri edinin. İbrahim ve İsmail'e şöyle emretmiştik: \"Tavaf edenler, kendini ibadete verenler, rukû ve secde edenler için evimi (Kâbe'yi) tertemiz tutun.\"",
    "Ey iman edenler! Sabrederek ve namaz kılarak Allah'tan yardım dileyin. Şüphe yok ki Allah sabredenlerle beraberdir.",
    "İyilik, yüzlerinizi doğu ve batı taraflarına çevirmeniz(den ibaret) değildir. Asıl iyilik, Allah'a, ahiret gününe, meleklere, kitap ve peygamberlere iman edenlerin; mala olan sevgilerine rağmen, onu yakınlara, yetimlere, yoksullara, yolda kalmışa, (ihtiyacından dolayı) isteyene ve (özgürlükleri için) kölelere verenlerin; namazı dosdoğru kılan, zekâtı veren, antlaşma yaptıklarında sözlerini yerine getirenlerin ve zorda, hastalıkta ve savaşın kızıştığı zamanlarda (direnip) sabredenlerin tutum ve davranışlarıdır. İşte bunlar, doğru olanlardır. İşte bunlar, Allah'a karşı gelmekten sakınanların ta kendileridir.",
    "namazlara ve orta namaza devam edin. Allah'a gönülden boyun eğerek namaza durun.",
    "Eğer (bir tehlikeden) korkarsanız, namazı yaya olarak veya binek üzerinde kılın. Güvenliğe kavuşunca da, Allah'ı, daha önce bilmediğiniz ve onun size öğrettiği şekilde anın (namazı normal vakitlerdeki gibi kılın).",
    "Şüphesiz iman edip salih ameller işleyen, namazı dosdoğru kılan ve zekatı verenlerin mükafatları Rableri katındadır. Onlara korku yoktur. Onlar mahzun da olmayacaklardır.",
  ]
};

module.exports = SureScene;
