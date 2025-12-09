import { useEffect } from "react";
import useClock from "../../hooks/useClock";
import ClockDisplay from "../shared/clock-display";
import ClockAction from "../clock-action";

const LocalClock = ({ clock, updateClock }) => {
  const { date, offset, timezone } = useClock(clock.timezone, clock.offset);

  useEffect(() => {
    updateClock({
      date,
      timezone,
      offset,
    });
  }, [date]);

  return (
    <div>
      {date && (
        <ClockDisplay
          date={date}
          timezone={timezone}
          offset={offset}
          title={clock.title}
        />
      )}
      <ClockAction clock={clock} updateClock={updateClock} local={true} />
    </div>
  );
};

export default LocalClock;
