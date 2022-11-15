import { DayPilotScheduler } from 'daypilot-pro-react';
import { inputCnstStore } from '../../../state/client/store';
import { useConsultants } from '../../../state/server/useGetData';

export function Scheduler() {
  const { inputCnst } = inputCnstStore();
  const cnsts = useConsultants(inputCnst);
  return (
    <DayPilotScheduler
      startDate="2022-11-01"
      days={365}
      scale="Day"
      timeHeaders={[
        { groupBy: 'Month' },
        { groupBy: 'Day', format: 'd' },
      ]}
      resources={cnsts}
      events={[
        {
          id: 'p1',
          text: '(주)설닢',
          start: '2022-11-07',
          end: '2022-12-31',
          resource: 'cnst1',
          backColor: '#adf',
          barHidden: true,
        },
        {
          id: 'p2',
          text: 'metlife',
          start: '2022-10-23',
          end: '2022-11-21',
          resource: 'cnst2',
          backColor: '#abd',
          barHidden: true,
        },
        {
          id: 'p3',
          text: '한국과학기술연구원',
          start: '2022-10-06',
          end: '2022-11-31',
          resource: 'cnst3',
          backColor: '#adc',
          barHidden: true,
        },
      ]}
      onEventClick={(args) => console.log(args.e.data)}
    />
  );
}
