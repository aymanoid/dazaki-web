import { NextSeo } from "next-seo";
import TerminalInReact from "terminal-in-react";

const Terminal = () => {
  return (
    <>
      <NextSeo
        title="Dazaki - Terminal"
        description="Dazaki provides custom techonology solutions for businesses and individuals."
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <TerminalInReact
          startState="maximised"
          hideTopBar={true}
          color="#CCCCCC"
          backgroundColor="#0C0C0C"
          style={{ fontWeight: "bold", fontSize: "1em" }}
          commands={{
            base64: {
              method: (args, print) => {
                if (!args._.length) {
                  return print("No input string was provided.");
                }
                const inputString = args._.join(" ");
                const encodedString =
                  Buffer.from(inputString).toString("base64");
                if (args.copy) {
                  navigator.clipboard.writeText(encodedString);
                }
                return print(encodedString);
              },
              options: [
                {
                  name: "copy",
                  description:
                    "Whether to copy the output value to the clipboard.",
                  defaultValue: false,
                },
              ],
            },
          }}
          descriptions={{
            base64: "Base64 encode.",
          }}
          msg="Various utility commands."
        />
      </div>
    </>
  );
};

export default Terminal;
