import * as React from "react";
import { Link } from "react-router-dom";
import { IPageViewProps } from "src/Entities/Interfaces";

export default class PageViewer extends React.Component<IPageViewProps> {
  public render() {
    const name = this.getPageName();
    document.title = name;
    return (
      <div className="page-viewer-container">
        <h2>{name}</h2>
        <p>
          This a static content with dynamic title. this is a fixed content for demo.
        </p>
        <p>
          this part is about <span className="content-title">{name} </span>subject.
        </p>
        <p>
         content content content content content content
        </p>

        <hr />
        <Link to="/">Home</Link>
      </div>
    );
  }
  private getPageName() {
    return this.props.match.params.Name;
  }
}
