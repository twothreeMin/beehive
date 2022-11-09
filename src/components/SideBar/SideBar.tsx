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
            <button type="button">
              <span>컨설팅팀</span>
            </button>
          </li>
          <li className="menu">
            <button type="button">
              <span>고객사</span>
            </button>
          </li>
        </ul>
      </SideBarContent>
    </SideBarWrpper>
  );
}
