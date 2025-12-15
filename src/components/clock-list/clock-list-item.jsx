import useClock from "../../hooks/useClock";
import ClockAction from "../clock-action";
import ClockDisplay from "../shared/clock-display";

const ClockListItem = ({ clock, updateClock, deleteClock, localClock }) => {
  const { date } = useClock(clock.timezone, clock.offset);

  if (!date) return null;

  return (
    <div>
      <ClockDisplay
        date={date}
        offset={clock.offset}
        timezone={clock.timezone}
        title={clock.title}
      />

      

      <ClockAction
        clock={clock}
        updateClock={updateClock}
        deleteClock={deleteClock}
      />
    </div>
  );
};

export default ClockListItem;
