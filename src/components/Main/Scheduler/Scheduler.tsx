import { DayPilotScheduler } from 'daypilot-pro-react';
import { inputCnstStore } from '../../../state/client/store';
import { useConsultants, useProject } from '../../../state/server/useGetData';

export function Scheduler() {
  const { inputCnst } = inputCnstStore();
  const cnsts = useConsultants(inputCnst);
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
