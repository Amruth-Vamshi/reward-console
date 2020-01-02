import React from "react";
import Paragraph from "antd/lib/typography/Paragraph";

interface ParagraphState {
  str: string;
}

interface ParagraphProps {}

export default class CustomParagraph extends React.Component<
  ParagraphProps,
  ParagraphState
> {
  constructor(props: ParagraphProps) {
    super(props);
    this.state = {
      str: "This is editable text"
    };
  }

  onChange = str => {
    console.log("Content change:", str);
    this.setState({ str });
  };

  render() {
    return (
      <div>
        <Paragraph editable={{ onChange: this.onChange }}>
          {this.state.str}
        </Paragraph>
        <Paragraph copyable>This is a copyable text.</Paragraph>
        <Paragraph copyable={{ text: "Hello, Ant Design!" }}>
          Replace copy text.
        </Paragraph>
      </div>
    );
  }
}
