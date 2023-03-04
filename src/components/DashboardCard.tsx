import React, { ReactNode } from 'react';

import clsxm from '@/lib/clsxm';

type DashboardCardProps = {
  children: ReactNode;
  className?: string;
};

export const DashboardCard = ({ children, className }: DashboardCardProps) => {
  return (
    <div className={clsxm(className, 'rounded bg-white p-4 shadow')}>
      {children}
    </div>
  );
};
