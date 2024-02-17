import "./Button.css";

export default function Button({ children }) {
  return (
    <>
      <div className="buttons">
        <button className="button">{children}</button>
      </div>
    </>
  );
}
