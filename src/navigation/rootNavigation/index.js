import {
  CommonActions,
  createNavigationContainerRef,
  StackActions,
} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

const navigate = (path, params) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(path, params);
  }
};

const pop = (count = 1) => {
  if (navigationRef.isReady()) {
    const stAction = StackActions.pop(count);
    navigationRef.dispatch(stAction);
  }
};

const popToTop = () => {
  if (navigationRef.isReady()) {
    const stAction = StackActions.popToTop();
    navigationRef.dispatch(stAction);
  }
};

const goBack = () => {
  if (navigationRef.isReady() && navigationRef.canGoBack()) {
    navigationRef.goBack();
  }
};

// [{ name: ScreenNames.ONBOARDING_SCREEN }]

const restStack = routes => {
  if (navigationRef.isReady()) {
    const resetAction = CommonActions.reset({
      index: 1,
      routes,
    });
    navigationRef.dispatch(resetAction);
  }
};

export const RootNavigation = {
  navigate,
  goBack,
  pop,
  popToTop,
  restStack,
};
