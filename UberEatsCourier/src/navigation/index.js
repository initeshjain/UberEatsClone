import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OrderDelivery from "../screens/OrderDelivery";
import OrdersScreen from "../screens/OrdersScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { useAuthContext } from "../contexts/AuthContext";
import { ActivityIndicator } from "react-native";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const { dbCourier, loading } = useAuthContext();

  if (loading) {
    return (
      <ActivityIndicator size={"large"} style={{ flex: 1 }} color="grey" />
    );
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {dbCourier ? (
        <>
          <Stack.Screen name="OrdersScreen" component={OrdersScreen} />
          <Stack.Screen name="OrdersDeliveryScreen" component={OrderDelivery} />
        </>
      ) : (
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      )}
    </Stack.Navigator>
  );
};

export default Navigation;
