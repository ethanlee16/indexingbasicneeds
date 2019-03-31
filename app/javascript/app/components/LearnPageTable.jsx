import React from "react";
import { Button, HTMLTable, Icon } from "@blueprintjs/core";

const LearnPageTable = ({ files }) => (
  <HTMLTable className="learn-page-table">
    <thead>
      <tr>
        <th colSpan={2}>
          <h4 className="learn-page-research-table-header">Name</h4>
        </th>
        <th>
          <h4 className="learn-page-research-table-header">Date</h4>
        </th>
        <th>
          <h4 className="learn-page-research-table-header">Action</h4>
        </th>
      </tr>
    </thead>
    <tbody>
      {files.map((file, i) => (
        <tr key={`file-${file.id}`}>
          <td style={{ width: "10px" }}>
            <Icon icon="document" iconSize={18} />
          </td>
          <td style={{ maxWidth: "200px" }}>{file.name}</td>
          <td>{file.updated_at}</td>
          <td>
            <a href={file.download_link} target="_blank">
              <Button large text="Download" />
            </a>
          </td>
        </tr>
      ))}
    </tbody>
  </HTMLTable>
);

export default LearnPageTable;
