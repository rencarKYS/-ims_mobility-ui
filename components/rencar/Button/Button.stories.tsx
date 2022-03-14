import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './index'

export default {
  title: "Example/Rencar/Button",
  component: Button,
  decorators: [
    (Story) => (
      <div style={{display: 'flex', flexWrap: 'wrap', gap: 10}}>
        <Story />
      </div>
    )
  ]
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Variants = (args) => (
  <>
    <Button style={{flex: 1}} {...args}>Default</Button>
    <Button style={{flex: 1}} {...args} outline>Outline</Button>
    <Button style={{flex: 1, borderRadius: 5}} {...args}>Radius</Button>
    <Button style={{flex: 1, borderRadius: 5}} {...args} outline >RadiusOutline</Button>
    <Button style={{flex: 1}} disabled {...args}>Default</Button>
    <Button style={{flex: 1, borderRadius: 5}} disabled {...args}>Radius</Button>
  </>
)

export const Size = (args) => (
  <>
    <Button {...args} style={{width: '216px', height: 52}}>렌터가 요청하기</Button>
    <Button {...args} style={{width: '130px', height: 52}}>현장 사고출동자</Button>
    <Button {...args} disabled style={{width: '110px', height: 44}}>인증</Button>
    <Button {...args} outline style={{width: '150px', height: 44}}>추천인 찾기</Button>
    <Button {...args} style={{width: '150px', height: 50, borderRadius: 5}}>로그인</Button>
    <Button {...args} outline style={{width: '150px', height: 42, borderRadius: 5}}>셀프 링크 공유</Button>
    <Button {...args} disabled style={{width: '150px', height: 46}}>요청하기</Button>
    <Button {...args} disabled style={{width: '150px', height: 36}}>리뷰작성확인</Button>
    <Button {...args} outline style={{width: '150px', height: 40}}>새 공업사 추가</Button>
  </>
)

Size.parameters = {
  docs: {
    storyDescription: "버튼 사이즈"
  }
}


// export const Default = Template.bind({})
// export const Outline = Template.bind({})
// export const DefaultBorder = Template.bind({})
// export const OutlineBorder = Template.bind({})


Variants.args = {
  onClick: () => console.log('click'),
}
