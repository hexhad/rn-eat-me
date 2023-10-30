import React from 'react';

export const buildProvidersTree = componentWithProps => {
  return componentWithProps.reduce(
    (AccumulatedComps, [Provider, props = {}]) =>
      ({children}) =>
        (
          <AccumulatedComps>
            <Provider {...props}>{children}</Provider>
          </AccumulatedComps>
        ),
    ({children}) => <>{children}</>,
  );
};
