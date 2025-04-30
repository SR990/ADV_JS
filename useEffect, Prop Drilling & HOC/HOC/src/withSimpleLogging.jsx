import React, { useEffect } from 'react';

function withSimpleLogging(WrappedComponent) {
  function EnhancedComponent(props) {
    useEffect(() => {
      console.log(`[${WrappedComponent.name || 'Component'}] Mounted`);
      return () => {
        console.log(`[${WrappedComponent.name || 'Component'}] Unmounted`);
      };
    }, []);

    console.log(`[${WrappedComponent.name || 'Component'}] Rendering with props:`, props);

    return <WrappedComponent {...props} />;
  }

  return EnhancedComponent;
}

export default withSimpleLogging;
