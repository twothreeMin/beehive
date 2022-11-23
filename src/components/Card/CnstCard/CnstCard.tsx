import Close from '../../../assets/close.png';
import { Consultant } from '../../../state/server/type/type';
import { ButtonWrapper, CardContent, CardWrapper } from './style';

export function CnstCard({ cnst }: {cnst: Consultant}) {
  return (
    <CardWrapper>
      <CardContent>
        <img src={Close} alt={cnst.name} className="w-24 h-24 m-6 rounded-full shadow-lg" />
        <h5 className="mb-1 text-xl font-medium text-black">
          {cnst.name}
        </h5>
        <span className="text-sm text-gray-500 mb-3">
          {cnst.position}
        </span>
        <ButtonWrapper>
          <button type="button" className="primary">
            <span className="px-2 py-1">
              수정
            </span>
          </button>
          <button type="button" className="secondary">
            <span className="p-1">
              자세히
            </span>
          </button>
        </ButtonWrapper>
      </CardContent>
    </CardWrapper>
  );
}
