import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import ButtonGroup from "../ButtonGroup";

interface TodoInputI {
    onSetTodos: React.Dispatch<React.SetStateAction<string[]>>;
}

function TodoInput({ onSetTodos }: TodoInputI) {
    const [todoInput, setTodoInput] = useState("");
    const [isFocused, setIsFocused] = useState(false);

    const addTodoHanlder = () => {
        if (!todoInput.trim()) return;

        onSetTodos((prev) => [...prev, todoInput]);
        setTodoInput("");
    };
    const clearTodosHanlder = () => {
        onSetTodos([]);
    };

    const styles = StyleSheet.create({
        inputContainer: {
            gap: 24,
            alignItems: "center",
        },

        textInput: {
            width: "100%",
            padding: 16,
            borderColor: isFocused ? "#623CEA" : "#383D3B",
            color: "#383D3B",
            borderWidth: 2,
            borderRadius: 6,
            fontSize: 16,
        },
    });

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                placeholder="Enter your todos..."
                placeholderTextColor="#969e9b"
                onChangeText={(text) => setTodoInput(text)}
                value={todoInput}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
            <ButtonGroup
                onAddTodo={addTodoHanlder}
                onClearTodos={clearTodosHanlder}
            />
        </View>
    );
}

export default TodoInput;
