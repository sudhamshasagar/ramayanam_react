import React from "react";

export default function ArrowHandler({ shlokaId, SetShlokaId }) {
  console.log(shlokaId);
  const handleShlokaIdForward = () => {
    console.log(shlokaId);
    SetShlokaId(shlokaId + 1);
  };
  const handleShlokaIBackward = () => {
    console.log(shlokaId);
    if (shlokaId > 0) {
      SetShlokaId(shlokaId - 1);
    }
  };
  return (
    <div>
      <div className="buttons">
        {shlokaId>0 && (
          <div
            onClick={() => {
              handleShlokaIBackward();
            }}
          >
            <button className="preBtn">
                Previous
            </button>
          </div>
        )}
        <div
          onClick={() => {
            handleShlokaIdForward();
          }}
        >
          <button className="nextBtn">
                Next
            </button>
        </div>
      </div>
    </div>
  );
}
