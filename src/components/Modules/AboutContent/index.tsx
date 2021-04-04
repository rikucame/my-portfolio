import React from 'react';
import {
  DescriptionColumn,
  English,
  Icon,
  Japanese,
  ProfileColumn,
  SnsLink,
  SnsWrap,
  StyledCaption,
  Text,
} from './style';

export const AboutContent: React.FC = () => {
  return (
    <StyledCaption>
      <Japanese>
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
      </Japanese>
      <English>
        <ProfileColumn>
          <Text>Rikuto Ishikura</Text>
          <Text>Photographer | Web Enginier</Text>
          <Text>March 18 1998</Text>
        </ProfileColumn>
        <DescriptionColumn>
          <Text>Like a leave the past behind</Text>
          <Text>Like a feel the future</Text>
          <Text>Photograph the world in an &quot;Ambiguous&quot; way.</Text>
        </DescriptionColumn>
      </English>
      <SnsWrap>
        <SnsLink href="https://www.instagram.com/rikton_0318/" target="_blank" rel="noopener">
          <Icon fileName={'instagram.svg'} />
        </SnsLink>
        <SnsLink href="https://twitter.com/rikton_0318" target="_blank" rel="noopener">
          <Icon fileName={'twitter.svg'} />
        </SnsLink>
        <SnsLink href="https://github.com/rikucame" target="_blank" rel="noopener">
          <Icon fileName={'github.svg'} />
        </SnsLink>
      </SnsWrap>
    </StyledCaption>
  );
};
