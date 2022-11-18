import { DayPilotScheduler } from 'daypilot-pro-react';
import { searchCnstStore } from '../../../state/client/store';
import { useGetConsultants, useProject } from '../../../state/server/useGetData';

export function Scheduler() {
  const { searchCnst } = searchCnstStore();
  const cnsts = useGetConsultants(searchCnst);
  const project = useProject();

  return (
    <DayPilotScheduler
      startDate="2022-10-01"
      days={365}
      scale="Day"
      timeHeaders={[
        { groupBy: 'Month' },
        { groupBy: 'Day', format: 'd' },
      ]}
      resources={cnsts}
      events={project}
      onEventClick={(args) => console.log(args.e.data)}
    />
  );
}
