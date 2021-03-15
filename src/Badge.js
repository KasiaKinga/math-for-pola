import React, { useState, useEffect } from "react";

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
  const [loaded, setLoaded] = useState(false);
  const { currentBadge } = props;

  useEffect(() => {
    // preload the image first, so when you get to the next badge there will be no delay to
    // download the images from the device
    const imageList = [reading, princess, queen];
    imageList.forEach((image) => {
      new Image().src = image;
    });
  }, []);

  return (
    <div className="Badge">
      <img
        // the key prop is required so react knows to reload the img when a new img is specified,
        // so we can see the animation again
        key={currentBadge}
        src={badgeMap[currentBadge]}
        alt="current badge"
        onLoad={() => setLoaded(true)}
        style={loaded ? {} : { display: "none" }}
      />
      {loaded ? <p>{currentBadge}</p> : null}
    </div>
  );
};
