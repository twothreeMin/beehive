import { DayPilot, DayPilotScheduler } from 'daypilot-pro-react';

export function Scheduler() {
  return (
    <DayPilotScheduler
      startDate={DayPilot.Date.today().firstDayOfMonth()}
      days={DayPilot.Date.today().daysInMonth()}
      scale="Day"
      timeHeaders={[
        { groupBy: 'Month' },
        { groupBy: 'Day', format: 'd' },
      ]}
      resources={[
        { name: '이상민', id: 'A' },
        { name: '지경배', id: 'B' },
        { name: '이덕규', id: 'C' },
        { name: '김지수', id: 'D' },
      ]}
    />
  );
}
