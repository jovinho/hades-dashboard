import React from "react";
import Helmet from "react-helmet";

const Layout = ({ children }) => (
  <div>
    <Helmet
      title="Hades Dashboard"
      meta={[
        {
          name: "Hades SCADA Dashboard",
          content: "SCADA Hades Dashboard"
        },
        {
          name: "keywords",
          content: "dashboard, scada"
        }
      ]}
    />
    {children}
  </div>
);

export default Layout;
