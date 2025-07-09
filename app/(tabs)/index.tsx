import { api } from "@/convex/_generated/api";
import useTheme from "@/hooks/useTheme";
import { useQuery } from "convex/react";
import { Text, View, TouchableOpacity } from "react-native";

export default function Index() {
  const { toggleDarkMode } = useTheme();

  const todos=useQuery(api.todos.getTodos);
  console.log("Todos:", todos);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Welcome to the Todo App</Text>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>
          Toggle Mode
        </Text>
      </TouchableOpacity>
    </View>
  );
}
