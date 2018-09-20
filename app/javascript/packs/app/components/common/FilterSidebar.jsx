import React from "react";
import { Classes, Icon, ITreeNode, Tooltip, Tree } from "@blueprintjs/core";

class FilterSidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nodes: this.getInitialNodes(),
    };
  }

  componentDidMount() {}

  getInitialNodes() {
    throw new Error("Not Implemented.");
  }

  handleNodeClick = (node, nodePath, e) => {
    const originallySelected = node.isSelected;
    if (!e.shiftKey) {
      this.forEachNode(this.state.nodes, n => (n.isSelected = false));
    }
    node.isSelected = originallySelected == null ? true : !originallySelected;
    this.setState(this.state);
  };

  handleNodeExpand = node => {
    node.isExpanded = true;
    this.setState(this.state);
  };

  handleNodeCollapse = node => {
    node.isExpanded = false;
    this.setState(this.state);
  };

  forEachNode(nodes, callback) {
    if (nodes == null) {
      return;
    }

    for (const node of nodes) {
      callback(node);
      this.forEachNode(node.childNodes, callback);
    }
  }

  render() {
    return (
      <Tree
        contents={this.state.nodes}
        onNodeClick={this.handleNodeClick}
        onNodeCollapse={this.handleNodeCollapse}
        onNodeExpand={this.handleNodeExpand}
        className={Classes.ELEVATION_1}
      />
    );
  }
}

export default FilterSidebar;
