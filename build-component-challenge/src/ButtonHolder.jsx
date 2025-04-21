import Button from "./button";
export default function ButtonHolder() {
  const btnStyle = {
    flex: "0 0 calc(50% - 10px)",
    boxSizing: "border-box",
    padding: "10px",
  };

  const navStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    border: "2px solid #017575",
    justifyContent: "center",
    padding: "5px",
  };
  return (
    <>
      <nav style={navStyle}>
        <Button style={btnStyle} />
        <Button style={btnStyle} />
        <Button style={btnStyle} />
        <Button style={btnStyle} />
        <Button style={btnStyle} />
        <Button style={btnStyle} />
        <Button style={btnStyle} />
        <Button style={btnStyle} />
        <Button style={btnStyle} />
        <Button style={btnStyle} />
        <Button style={btnStyle} />
        <Button style={btnStyle} />
        <Button style={btnStyle} />
      </nav>
    </>
  );
}
