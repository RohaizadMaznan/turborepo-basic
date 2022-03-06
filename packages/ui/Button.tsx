import * as React from "react";
import { NextPage } from "next";

interface Props {
  name: string;
}

export const Button: NextPage<Props> = (props) => {
  const { name } = props;

  return <button>{name ? name : "Boop"}</button>;
};
