import React from 'react';

import './Layout.css';

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = (props) => {
  const { children } = props;
  return <div className="laytou-container">{children}</div>;
};

export default Layout;
