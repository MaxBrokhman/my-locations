import React from 'react'
import { Redirect } from 'react-router-dom';

import { MAIN_PATHNAME } from '../config';

export const withActiveItem = (Wrapped) => (props) => (
  props.activeItem 
    ? <Wrapped {...props} />
    : <Redirect to={MAIN_PATHNAME} />
)
