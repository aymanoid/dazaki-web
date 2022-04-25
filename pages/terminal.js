import TerminalInReact from "terminal-in-react";

const Terminal = () => {
  return (
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
          "open-google": () => window.open("https://www.google.com/", "_blank"),
          showmsg: () => "Hello World",
          popup: () => alert("Terminal in React"),
          base64: {
            method: (args, print) => {
              if (!args._.length) {
                return print("No input string was provided.");
              }
              const inputString = args._.join(" ");
              const encodedString = Buffer.from(inputString).toString("base64");
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
          "open-google": "opens google.com",
          showmsg: "shows a message",
          alert: "alert",
          popup: "alert",
          base64: "base64ies a string",
        }}
        msg="Various utility commands."
      />
    </div>
  );
};

export default Terminal;
