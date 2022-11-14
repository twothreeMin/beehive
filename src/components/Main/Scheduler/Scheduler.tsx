import { DayPilotScheduler } from 'daypilot-pro-react';

export function Scheduler() {
  return (
    <DayPilotScheduler
      startDate="2022-11-01"
      days={30}
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
      events={[
        {
          id: 1, text: 'Event 1', start: '2022-11-07', end: '2022-12-31', resource: 'A',
        },
      ]}
      onEventClick={(args) => console.log(args.e.data)}
    />
  );
}
