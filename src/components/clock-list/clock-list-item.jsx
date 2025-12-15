import { formatDistance } from "date-fns";
import useClock from "../../hooks/useClock";
import ClockAction from "../clock-action";
import ClockDisplay from "../shared/clock-display";
import useTimer from "../../hooks/useTimer";

const ClockListItem = ({ clock, updateClock, deleteClock, localClock }) => {
  const { date } = useClock(clock.timezone, clock.offset);
  const timer = useTimer(date);

  if (!date) return null;

  return (
    <div>
      <ClockDisplay
        date={date}
        offset={clock.offset}
        timezone={clock.timezone}
        title={clock.title}
      />

      <h3>Time Difference: {formatDistance(localClock, timer)}</h3>

      <ClockAction
        clock={clock}
        updateClock={updateClock}
        deleteClock={deleteClock}
      />
    </div>
  );
};

export default ClockListItem;
