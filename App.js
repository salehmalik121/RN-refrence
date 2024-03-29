import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomePage";
import Welcome from "./src/screens/WelcomePage";
import ListScreen from "./src/screens/list";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorsScreen from "./src/screens/Colors";
import SliderScreen from "./src/screens/slider";
import ColorCounterScreen from "./src/screens/ColorCounterScreen";
import ThemeChanger from "./src/screens/ThemeChanger";
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Welcome: Welcome,
    ListScreen: ListScreen,
    ImageScreen:ImageScreen,
    CounterScreen: CounterScreen,
    ColorsScreen:ColorsScreen,
    SliderScreen : SliderScreen,
    ColorCounterScreen : ColorCounterScreen,
    ThemeChanger:ThemeChanger
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);
export default createAppContainer(navigator);