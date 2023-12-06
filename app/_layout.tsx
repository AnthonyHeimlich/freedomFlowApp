import { Stack } from "expo-router";

const StackLayout = () => {
    return(
        <Stack>
            <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
            <Stack.Screen name="cadastroTab" options={{headerShown: false}}/>
            <Stack.Screen name="index" options={{headerShown: false, contentStyle: {backgroundColor:"#024959"}}}/>
        </Stack>
    );
};

export default StackLayout;