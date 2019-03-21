import styled from "styled-components";

import { Button } from "../../shared/Button/styles";

export const BoxTeam = styled.div`
  padding: 4rem;
  max-width: 260px;
  max-height: 260px;
  position: absolute;
  top: 15%;
  right: -6%;
  background: linear-gradient(115deg, #dd9fff, #8760ff);
  opacity: 0.9;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;

export const JobsButton = styled(Button)`
  background: linear-gradient(to left, #8117ee, #3d27f7);
`;
