import React, { Dispatch, ReactNode } from 'react';

export type HeadingProps = { title: string };

export type SectionProps = {
  title?: string;
  children: ReactNode; // for JSX elemens or any type
};

export type CounterProps = {
  children: ReactNode;
  setCount: Dispatch<React.SetStateAction<number>>;
};
