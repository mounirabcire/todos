import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

interface ModalConfirmationI {
    onCancel: () => void;
    onContinue: () => void;
    visible: boolean;
    textHeader: string;
    btnActionText: string;
}

function ModalConfirmation({
    onCancel,
    onContinue,
    visible,
    textHeader,
    btnActionText,
}: ModalConfirmationI) {
    return (
        <Modal visible={visible} animationType="fade">
            <View style={styles.modalContainer}>
                <View style={styles.textBox}>
                    <Text style={styles.text}>{textHeader}</Text>
                    <View style={styles.btnGroup}>
                        <Pressable
                            onPress={onContinue}
                            style={styles.addTodoBtn}
                        >
                            <View>
                                <Text style={styles.addTodoBtnLabel}>
                                    {btnActionText}
                                </Text>
                            </View>
                        </Pressable>
                        <Pressable
                            onPress={onCancel}
                            style={styles.clearTodosBtn}
                        >
                            <View>
                                <Text style={styles.clearTodosBtnLabel}>
                                    Cancel
                                </Text>
                            </View>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: "#f6f6f6",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingInline: 16,
    },
    textBox: {
        gap: 24,
        padding: 16,
        borderWidth: 2,
        borderColor: "#383D3B",
        borderRadius: 7,
    },
    text: {
        color: "#383D3B",
        fontSize: 18,
        fontWeight: 600,
    },
    btnGroup: {
        flexDirection: "row",
        gap: 16,
    },
    addTodoBtn: {
        paddingBlock: 7,
        backgroundColor: "#E74C3C",
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
        borderColor: "#383D3B",
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
    },
    clearTodosBtnLabel: {
        color: "#383D3B",
        fontWeight: 600,
        fontSize: 16,
    },
});

export default ModalConfirmation;
