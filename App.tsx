import { useState } from "react";
import { StyleSheet, View, StatusBar } from "react-native";

import TodoInput from "./components/todos/TodoInput";
import TodoList from "./components/todos/TodoList";

function App() {
    const [todos, setTodos] = useState<string[]>([]);

    const deleteTodoItem = (itemID: number) => {
        setTodos((prev) => prev.filter((item, index) => index !== itemID));
    };

    return (
        <View style={styles.container}>
            <TodoInput onSetTodos={setTodos} />
            <TodoList todos={todos} onDeleteTodoItem={deleteTodoItem}/>
            <StatusBar barStyle="dark-content" />
        </View>
    );
}

// FFFFFF
// 383D3B => black
// 623CEA => purple

const styles = StyleSheet.create({
    container: {
        paddingTop: 80,
        paddingInline: 20,
        flex: 1,
        gap: 56,
        backgroundColor: "#fff",
    },
});

export default App;
