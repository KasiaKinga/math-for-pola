import React from "react";

import reading from "./images/reading.png";
import princess from "./images/princess.png";
import queen from "./images/queen.png";

import "./Badge.css";

const BADGE_LOCAL_STORAGE_KEY = "currentBadge";

const badgeOrderedArray = ["Little Girl", "Princess", "Queen"];
const badgeMap = {
  "Little Girl": reading,
  Princess: princess,
  Queen: queen,
};

export const getCurrentBadgeFromLocalStorage = () => {
  let currentBadgeFromLocal = localStorage.getItem(BADGE_LOCAL_STORAGE_KEY);

  if (!currentBadgeFromLocal) {
    // if none, assuming it's the first time loading it, therefore defaults to Beginner
    localStorage.setItem(BADGE_LOCAL_STORAGE_KEY, "Little Girl");
    currentBadgeFromLocal = localStorage.getItem(BADGE_LOCAL_STORAGE_KEY);
  }

  return currentBadgeFromLocal;
};

export const setNextBadgeInLocalStorage = (currentBadge) => {
  const currentBadgeIdx = badgeOrderedArray.indexOf(currentBadge);
  if (currentBadgeIdx !== badgeOrderedArray.length - 1) {
    // this condition means we're not reaching the last badge yet
    localStorage.setItem(
      BADGE_LOCAL_STORAGE_KEY,
      badgeOrderedArray[currentBadgeIdx + 1]
    );
  }
  // do nothing if last badge has already been accquired
};

export const Badge = (props) => {
  const { currentBadge } = props;

  return (
    <div className="Badge">
      {Object.keys(badgeMap).map((badgeName) => {
        // we render all badges at once, but only show the one that matches the current badge while
        // hiding the rest. this achieves the image-preload so when going to the next badge there will
        // be no delay of loading.
        return (
          <>
            <img
              key={badgeName}
              src={badgeMap[badgeName]}
              alt="current badge"
              // if it's the current badge then start the animation, otherwise don't display
              style={
                currentBadge === badgeName
                  ? {
                      animationName: "img-animation",
                    }
                  : { display: "none" }
              }
            />
            {currentBadge === badgeName ? <p>{currentBadge}</p> : null}
          </>
        );
      })}
    </div>
  );
};
