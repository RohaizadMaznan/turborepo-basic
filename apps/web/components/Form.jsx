import Link from "next/link";
import React, { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { title: props.title };
  }

  render() {
    return (
      <>
        <Link href="/">Back Home</Link>
        <h1>{this.state.title}</h1>
        <div>Form</div>
      </>
    );
  }
}

export default Form;
