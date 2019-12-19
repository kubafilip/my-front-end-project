import React, {Component} from "react";
import List from "./List";

const InfiniteS = () => (
    <div className="container">
      <div className="row">
        <div className="infList">
        <p>This is an infinite list and what you can do is inifinite scrolling. :)</p>
          <List />
        </div>
      </div>
    </div>
  );

export default InfiniteS;