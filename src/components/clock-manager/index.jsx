import LocalClock from "../local-clock";
import ClockList from "../clock-list";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const LOCAL_CLOCK_INIT = {
  title: "My Clock",
  timezone: "",
  offset: 0,
  date: null,
};

const ClockManger = () => {
  const [localClock, setLocalClock] = useState({ ...LOCAL_CLOCK_INIT });
  const [clocks, setClocks] = useState([]);

  const updateLocalClock = (data) => {
    setLocalClock((prev) => ({
      ...prev,
      ...data,
    }));
  };

  const createClock = (clock) => {
    clock.id = uuidv4();
    setClocks([...clocks, clock]);
  };

  const updateClock = (updatedClock) => {
    const updatedClocks = clocks.map((clock) => {
      if (clock.id === updatedClock.id) {
        return updatedClock;
      }
      return clock;
    });
    setClocks(updatedClocks);
  };

  const deleteClock = (id) => {
    const updatedClocks = clocks.filter((clock) => clock.id !== id);
    setClocks(updatedClocks);
  };

  return (
    <div>
      <LocalClock
        clock={localClock}
        updateClock={updateLocalClock}
        createClock={createClock}
      />
      <ClockList />
    </div>
  );
};

export default ClockManger;
