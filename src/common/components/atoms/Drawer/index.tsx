import React, { Fragment } from 'react';
import RcDrawer from 'rc-drawer';
import 'rc-drawer/assets/index.css';

export type drawer_ty = {
  className: string,
  children: any,
  closeButton: any,
  closeButtonStyle: any,
  drawerHandler: any,
  toggleHandler: any,
  open: any,
}

const Drawer = ({
  className,
  children,
  closeButton,
  closeButtonStyle,
  drawerHandler,
  toggleHandler,
  open,
  ...props
}: drawer_ty) => {
  // Add all classs to an array
  const addAllClasses = ['reusecore__drawer'];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  return (
    <Fragment>
      <RcDrawer
        open={open}
        onClose={toggleHandler}
        className={addAllClasses.join(' ')}
        {...props}
      >
        <div
          className="reusecore-drawer__close"
          onClick={toggleHandler}
          style={closeButtonStyle}
          role="button"
          tabIndex="0"
          onKeyPress={() => { }}
        >
          {closeButton}
        </div>
        {children}
      </RcDrawer>
      <div
        className="reusecore-drawer__handler"
        style={{ display: 'inline-block' }}
        onClick={toggleHandler}
        role="button"
        tabIndex="0"
        onKeyPress={() => { }}
      >
        {drawerHandler}
      </div>
    </Fragment>
  );
};

Drawer.defaultProps = {
  width: '300px',
  handler: false,
  level: null,
};

export default Drawer;
