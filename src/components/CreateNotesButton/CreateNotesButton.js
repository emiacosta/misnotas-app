import './CreateNotesButton.css';

function CreateNotesButton(props) {
  const onClickButton = () => {
    props.setOpenModal(prevState => !prevState);
  };
  
  return (
    <button
      className="CreateNotesButton"
      onClick={onClickButton}
    >
      +
    </button>
  );
}

export { CreateNotesButton };