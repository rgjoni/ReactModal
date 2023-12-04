import "./styles.css";
import react, { useState } from "react";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  //This useState Hook sets the animation to the correct direction
  const [modalAnimation, setModalAnimation] = useState("slide-up");
  function close() {
    setModalAnimation("slide-down");
    setTimeout(() => {
      setIsModalOpen(false);
      // Sets it for the next time its called so it doesn't slide down
      setModalAnimation("slide-up");
    }, 600);
  }
  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>open </button>
      {isModalOpen && (
        <div className={`modal-overlay`}>
          <div className={`modal-content ${modalAnimation}`}>
            <div className="feedbackModalHeader">
              <img
                src="/assets/dislike_modal.svg"
                alt=""
                className="dislikeBtnNonFilled"
              />
              <p className="provideFeedback">Provide additional feedback</p>
            </div>
            <button onClick={() => close()}> close </button>
          </div>
        </div>
      )}
         
    </div>
  );
}
