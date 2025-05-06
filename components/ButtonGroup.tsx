import { Text, StyleSheet, View, Pressable } from "react-native";
import ModalConfirmation from "./ModalConfirmation";
import { useState } from "react";

interface ButtonGroupI {
    onAddTodo: () => void;
    onClearTodos: () => void;
}

function ButtonGroup({ onAddTodo, onClearTodos }: ButtonGroupI) {
    const [isModelOpen, setIsModelOpen] = useState(false);

    return (
        <>
            <View style={styles.btnGroup}>
                {/* <Button title="Add Todo" onPress={onAddTodo} />
            <Button title="Reset Todos" onPress={onClearTodos} /> */}

                <Pressable onPress={onAddTodo} style={styles.addTodoBtn}>
                    <View>
                        <Text style={styles.addTodoBtnLabel}>Add todo</Text>
                    </View>
                </Pressable>
                <Pressable
                    onPress={() => setIsModelOpen(true)}
                    style={styles.clearTodosBtn}
                >
                    <View>
                        <Text style={styles.clearTodosBtnLabel}>
                            Clear todos
                        </Text>
                    </View>
                </Pressable>
            </View>

            {isModelOpen && (
                <ModalConfirmation
                    onContinue={onClearTodos}
                    onCancel={() => setIsModelOpen(false)}
                    visible={isModelOpen}
                    textHeader="Are you want to clear all the todos?"
                    btnActionText="Clear"
                />
            )}
        </>
    );
}

const styles = StyleSheet.create({
    btnGroup: {
        flexDirection: "row",
        gap: 16,
    },
    addTodoBtn: {
        paddingBlock: 7,
        backgroundColor: "#623CEA",
        flex: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
    },
    addTodoBtnLabel: {
        color: "#fff",
        fontWeight: 600,
        fontSize: 16,
    },
    clearTodosBtn: {
        paddingBlock: 7,
        borderWidth: 2,
        borderColor: "#623CEA",
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
    },
    clearTodosBtnLabel: {
        color: "#623CEA",
        fontWeight: 600,
        fontSize: 16,
    },
});

export default ButtonGroup;
