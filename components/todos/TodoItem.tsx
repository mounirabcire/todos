import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import ModalConfirmation from "../ModalConfirmation";

interface TodoItemI {
    todoText: string;
    todoItemID: number;
    onDeleteTodoItem: (itemID: number) => void;
}

function TodoItem({ todoText, todoItemID, onDeleteTodoItem }: TodoItemI) {
    const [isModelOpen, setIsModelOpen] = useState(false);

    return (
        <>
            <View style={styles.todoItemContainer}>
                <View style={styles.todoItem}>
                    <Text style={styles.todoItemLabel}>{todoText}</Text>
                </View>
                <Pressable
                    onPress={() => setIsModelOpen(true)}
                    android_ripple={{ color: "purple" }}
                    style={({ pressed }) => pressed && styles.pressedItemStyle}
                >
                    <Text style={styles.deleteTodoItemBtn}>Remove</Text>
                </Pressable>
            </View>
            {isModelOpen && (
                <ModalConfirmation
                    onContinue={() => onDeleteTodoItem(todoItemID)}
                    onCancel={() => setIsModelOpen(false)}
                    visible={isModelOpen}
                    textHeader="Are you want to remove the todo?"
                    btnActionText="Remove"
                />
            )}
        </>
    );
}

const styles = StyleSheet.create({
    todoItemContainer: {
        flexDirection: "row",
        gap: 16,
    },

    todoItem: {
        marginBottom: 16,
        paddingInline: 12,
        paddingBlock: 14,
        borderRadius: 4,
        backgroundColor: "#383D3B",
        flex: 1,
    },

    todoItemLabel: {
        fontSize: 18,
        color: "#fff",
        flex: 1,
    },

    // FOR IOS
    pressedItemStyle: {
        opacity: 0.4,
    },

    deleteTodoItemBtn: {
        padding: 5,
        backgroundColor: "#E74C3C",
        color: "#fff",
        borderRadius: 4,
        paddingInline: 12,
        paddingBlock: 10,
        fontWeight: 500,
        fontSize: 14,
    },
});

export default TodoItem;
