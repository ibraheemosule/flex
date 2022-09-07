import React from "react";
import { IComment } from ".";

export interface ILayout {
  children: React.ReactElement;
}

export interface ICommentProps {
  obj: IComment;
}
