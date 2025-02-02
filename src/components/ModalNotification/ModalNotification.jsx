import Modal from "react-modal";
import PropTypes from "prop-types";
import css from "./ModalNotification.module.css";

const ModalNotification = ({ isOpen, onClose, message }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={css.modal}
      overlayClassName={css.overlay}
      ariaHideApp={false}
    >
      <div className={css.content}>
        <h3 className={css.title}>✅ Success!</h3>
        <p className={css.text}>{message}</p>
        <button className={css.button} onClick={onClose}>
          OK
        </button>
      </div>
    </Modal>
  );
};

ModalNotification.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};

export default ModalNotification;
