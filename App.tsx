import {
    StyleSheet,
    View,
    Text,
} from "react-native";

function App() {
    return (
        <View style={styles.container}>
            <Text>Hello World</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#fff",
    },
});

export default App;
