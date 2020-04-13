import * as React from "react";

interface ITestProps {
  name: string;
}

export default class Test extends React.Component<ITestProps> {
  constructor(props: ITestProps) {
    super(props);
    this.alertName = this.alertName.bind(this);
  }

  public alertName() {
    alert(this.props.name);
  }

  public render() {
    return (<div><button onClick={this.alertName}>call {this.props.name}</button>
    </div>);
  }
}
