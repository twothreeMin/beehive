import { Link } from 'react-router-dom';
import { SideBarHeader, SideBarWrpper, SideBarContent } from './style';
import bee from '../../assets/bee.png';

export function SideBar() {
  return (
    <SideBarWrpper>
      <SideBarHeader>
        <div>
          <img src={bee} alt="bee" />
        </div>
      </SideBarHeader>
      <SideBarContent>
        <ul>
          <li id="menu-title">
            <span>메뉴</span>
          </li>
          <li className="menu">
            <Link to="/">
              <button type="button">
                <span>일정</span>
              </button>
            </Link>
          </li>
          <li className="menu">
            <Link to="/consultants">
              <button type="button">
                <span>컨설팅팀</span>
              </button>
            </Link>
          </li>
          <li className="menu">
            <Link to="/customers">
              <button type="button">
                <span>고객사</span>
              </button>
            </Link>
          </li>
        </ul>
      </SideBarContent>
    </SideBarWrpper>
  );
}
