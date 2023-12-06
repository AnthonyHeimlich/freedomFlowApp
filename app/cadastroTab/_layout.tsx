import { Stack } from "expo-router";

const StackLayout = () => {
    return(
        <Stack>
            <Stack.Screen name="cadastro" options={{headerShown: false}}/>
        </Stack>
    );
};

export default StackLayout;