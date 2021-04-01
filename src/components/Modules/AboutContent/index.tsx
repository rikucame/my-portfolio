import React from "react";
import { DescriptionColumn, Icon, IconsWrap, ProfileColumn, Row, SnsWrap, StyledCaption, Text } from "./style";

export const AboutContent: React.FC = () => {
  return (
    <StyledCaption>
      <Row>
        <ProfileColumn>
          <Text>石倉陸人</Text>
          <Text>写真家 | Webエンジニア</Text>
          <Text>1998.03.18</Text>
        </ProfileColumn>
        <DescriptionColumn>
          <Text>過去を残すように</Text>
          <Text>未来を想うように</Text>
          <Text>世界を「あいまい」に写す</Text>
        </DescriptionColumn>
      </Row>
      <Row>
      <ProfileColumn>
          <Text>Rikuto Ishikura</Text>
          <Text>Photographer | Web Enginier</Text>
          <Text>March 18 1998</Text>
        </ProfileColumn>
        <DescriptionColumn>
          <Text>Like a leave the past behind</Text>
          <Text>Like a feel the future</Text>
          <Text>Photograph the world in an "Ambiguous" way.</Text>
        </DescriptionColumn>
      </Row>
      <SnsWrap>
        <Icon fileName={"instagram.svg"} />
        <Icon fileName={"twitter.svg"} />
        <Icon fileName={"github.svg"} />
      </SnsWrap>
    </StyledCaption>
  );
};
