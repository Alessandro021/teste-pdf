import { SafeAreaView,View, useWindowDimensions } from "react-native";
import Pdf from "react-native-pdf";

//https://www.npmjs.com/package/react-native-pdf

const source = {
  uri: "http://samples.leanpub.com/thereactnativebook-sample.pdf",
  cache: true,
};


export default function App() {
  const { width, height } = useWindowDimensions();

  return (
    <View style={{ flex: 1 }}>
      <Pdf
        // trustAllCerts={false}
        source={source}
        // onLoadComplete={(numberOfPages, filePath) => {
        //   console.log(`Number of pages: ${numberOfPages}`);
        // }}
        // onPageChanged={(page, numberOfPages) => {
        //   console.log(`Current page: ${page}`);
        // }}
        // onError={(error) => {
        //   console.log(error);
        // }}
        // onPressLink={(uri) => {
        //   console.log(`Link pressed: ${uri}`);
        // }}
        style={{ flex: 1, width, height }}
      />
    </View>
  );
}

