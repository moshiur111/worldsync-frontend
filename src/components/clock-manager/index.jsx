import LocalClock from "../local-clock";
import ClockList from "../clock-list";
import { useState } from "react";

const LOCAL_CLOCK_INIT = {
  title: "My Clock",
  timezone: "",
  offset: 0,
  date: null,
};

const ClockManger = () => {
  const [localClock, setLocalClock] = useState({ ...LOCAL_CLOCK_INIT });

  const updateLocalClock = (data) => {
    setLocalClock((prev) => ({
      ...prev,
      ...data,
    }));
  };

  return (
    <div>
      <LocalClock clock={localClock} updateClock={updateLocalClock} />
      <ClockList />
    </div>
  );
};

export default ClockManger;
