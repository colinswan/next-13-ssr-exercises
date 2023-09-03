"use client";
import React from "react";
import format from "date-fns/format";

function Clock() {
  const [time, setTime] = React.useState();

  React.useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTime(new Date());
    }, 50);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return <p className="clock">{time ? format(time, "hh:mm:ss.S a") : "---"}</p>;
}

export default Clock;

/*
TODO SEE Solution 2: Suppressing the hydration mismatch warning

function Clock() {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTime(new Date());
    }, 50);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return (
    <p
      suppressHydrationWarning
      className="clock"
    >
      {format(time, 'hh:mm:ss.S a')}
    </p>
  );
}
*/
