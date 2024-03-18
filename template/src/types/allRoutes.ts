import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
export type AuthStackParams = {
  Login?: undefined;
};
export type MainStackParams = {
  Home?: undefined;
  Settings?: undefined;
};
export type AuthNavigationProps = NativeStackNavigationProp<AuthStackParams>;
export type MainNavigationProps = NativeStackNavigationProp<MainStackParams>;
export type RootRouteProps<RouteName extends keyof AuthStackParams> = RouteProp<
  AuthStackParams,
  RouteName
>;
export type PrivateRootRouteProps<RouteName extends keyof MainStackParams> =
  RouteProp<MainStackParams, RouteName>;
