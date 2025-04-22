import React from 'react';

export const motion = {
  div: function (props: any) {
    return React.createElement('div', props, props.children);
  },
};