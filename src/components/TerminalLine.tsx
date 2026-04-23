type TerminalLineProps = {
  command: string;
  output: string;
};

export function TerminalLine({ command, output }: TerminalLineProps) {
  return (
    <p className="terminal-line">
      <span className="prompt">$</span> {command}
      <br />
      <span>{output}</span>
    </p>
  );
}
