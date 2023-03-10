import React, { ReactNode } from 'react';

import clsxm from '@/lib/clsxm';

type DashboardCardProps = {
  children: ReactNode;
  className?: string;
};

export const DashboardCard = ({ children, className }: DashboardCardProps) => {
  return (
    <div
      className={clsxm(
        className,
        'flex-1 rounded-lg border border-gray-200 bg-white p-4 shadow'
      )}
    >
      {children}
    </div>
  );
};
