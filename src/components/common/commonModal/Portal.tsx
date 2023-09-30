"use client";
//* portal 가져오는 창
import React from "react";

import { createPortal } from "react-dom";

interface PortalProps {
  children: React.ReactNode;
}
const Portal = ({ children }: PortalProps) => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  return mounted ? createPortal(<>{children}</>, document.body) : null;
};

export default Portal;
