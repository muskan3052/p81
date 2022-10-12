import {createBottomTabNavigator} from "@react-navigation/bottom-tabs-native";
import Feed from '../screens/Feed'
import CreatePost from "../screens/CreatePost"

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name = "Feed" component={Feed} />
            <Tab.Screen name = "CreatePost" component={CreatePost} />
        </Tab.Navigator>
    );
}

export default BottomTabNavigator