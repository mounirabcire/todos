import { FlatList, View, StyleSheet } from "react-native";

import TodosItem from "./TodoItem";

interface TodoListI {
    todos: string[];
    onDeleteTodoItem: (itemID: number) => void;
}

function TodoList({ todos, onDeleteTodoItem }: TodoListI) {
    return (
        <View style={styles.todosContainer}>
            {/* <ScrollView>
                        {goals.length === 0 ? (
                            <Text>No goals set yet!</Text>
                        ) : (
                            goals.map((goal, index) => (
                                <View key={index} style={styles.goalItem}>
                                    <Text>{goal}</Text>
                                </View>
                            ))
                        )}
                    </ScrollView> */}

            <FlatList
                data={todos}
                renderItem={(itemMetaData) => (
                    <TodosItem
                        todoText={itemMetaData.item}
                        todoItemID={itemMetaData.index}
                        onDeleteTodoItem={onDeleteTodoItem}
                    />
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    todosContainer: {
        flex: 1,
    },
});

export default TodoList;
