import React, {JSX} from 'react';

export const buildProvidersTree = (componentWithProps: any) => {
  return componentWithProps.reduce(
    (AccumulatedComps: JSX.Element, [Provider, props = {}]) =>
      ({children}) =>
        (
          <AccumulatedComps>
            <Provider {...props}>{children}</Provider>
          </AccumulatedComps>
        ),
    ({children}) => <>{children}</>,
  );
};
