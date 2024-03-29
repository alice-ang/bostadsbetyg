import clsx from 'clsx';
import { ReactNode } from 'react';

type ContainerProps = {
  className?: string;
  children: ReactNode;
};

export const Container = ({ className, ...props }: ContainerProps) => {
  return (
    <div
      className={clsx('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)}
      {...props}
    />
  );
};
