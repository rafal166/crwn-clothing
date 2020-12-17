import React, { Component } from "react";

import MenuItem from "../MenuItem/MenuItem.component";
import SECTIONS_DATA from "../../data/sections.data";

import "./Directory.styles.sass";
export default class Directory extends Component {
  constructor() {
    super();
    this.state = {
      sections: SECTIONS_DATA,
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps}></MenuItem>
        ))}
      </div>
    );
  }
}
