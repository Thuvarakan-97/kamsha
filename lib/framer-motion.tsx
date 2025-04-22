"use client";

import React from 'react';

export const motion = {
  div: function (props: any) {
    return <div {...props}>{props.children}</div>;
  },
};