import React, { PropsWithChildren } from 'react';

type ContainerProps = {
  className?: string;
};

const Container = (props: PropsWithChildren<ContainerProps>) => {
  return <section className={`${props.className} max-w-[1600px] p-6 lg:p-8 mx-auto`}>{props?.children}</section>;
};

export default Container;
