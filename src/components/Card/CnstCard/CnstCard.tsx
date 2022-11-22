import Close from '../../../assets/close.png';
import { Consultant } from '../../../state/server/type/type';

export function CnstCard({ cnst }: {cnst: Consultant}) {
  return (
    <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow-md m-3 bg-yellow-50 border-yellow-50">
      <div className="flex flex-col items-center py-5">
        <img src={Close} alt="Bonnie" className="w-24 h-24 m-6 rounded-full shadow-lg" />
        <h5 className="mb-1 text-xl font-medium text-black">
          {cnst.name}
        </h5>
        <span className="text-sm text-gray-500 mb-3">
          {cnst.position}
        </span>
        <div className="flex mt-4 space-x-3 mx-6 my-3 ">
          <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <span className="px-2 py-1">
              수정
            </span>
          </button>
          <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">
            <span className="p-1">
              자세히
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
