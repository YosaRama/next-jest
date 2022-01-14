function CustomButton(props) {
  const { children, type } = props;

  return (
    <>
      <button className={type}>{children}</button>
    </>
  );
}

export default CustomButton;
