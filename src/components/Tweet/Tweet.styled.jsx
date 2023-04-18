import styled from 'styled-components';
import bcg from '../../images/bcg.png';

export const Item = styled.li`
  position: relative;
  margin: 15px;
  width: 380px;
  height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  ::before {
    content: ' ';
    top: 214px;
    left: 0;
    position: absolute;
    height: 8px;
    width: 100%;
    background: #EBD8FF;
    box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
`;
export const ItemBcg = styled.div`
  margin-top: 28px;
  margin-left: 36px;
  margin-right: 36px;
  height: 168px;
  background-image: url(${bcg});
  background-repeat: no-repeat;
  background-size: contain;
`;
export const AvaBorder = styled.div`
  position: absolute;
  top: 178px;
  left: 150px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #ebd8ff;
  z-index: 1;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
`;
