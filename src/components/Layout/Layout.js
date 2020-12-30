import React from 'react';
import PropTypes from 'prop-types';

import 'normalize.css';

//

const Layout = ({ children }) => <main>{children}</main>;

export default Layout;

//

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
