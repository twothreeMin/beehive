import close from '../../../assets/close.png';
import { ProfileButton, ProfileWrapper, ProfileDescription } from './style';

export function Profile() {
  return (
    <ProfileWrapper>
      <ProfileButton>
        <img src={close} alt="profile" />
        <ProfileDescription>
          <span id="name">
            이상민
          </span>
          <span id="position">
            전임 컨설턴트
          </span>
        </ProfileDescription>
      </ProfileButton>
    </ProfileWrapper>
  );
}
