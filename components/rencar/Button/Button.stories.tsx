import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './index'

export default {
  title: "Example/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Variants = (args) => (
  <>
    <div style={{display: 'flex', width: '50%', margin: '0 auto',}}>
      <Button {...args}>Default</Button>
      <Button {...args} outline>Outline</Button>
      <Button {...args} style={{borderRadius: 5}}>Radius</Button>
      <Button {...args} style={{borderRadius: 5}} outline >RadiusOutline</Button>
    </div>
    <div style={{display: 'flex', margin: '0 auto', marginTop: 10, width: '50%'}}>
      <Button disabled {...args}>Default</Button>
      <Button disabled {...args} style={{borderRadius: 5}}>Radius</Button>
    </div>
  </>
)

export const Size = (args) => (
  <div style={{display: 'flex', flexWrap: 'wrap', gap: 10}}>
    <Button {...args} style={{width: '216px', height: 52}}>렌터가 요청하기</Button>
    <Button {...args} style={{width: '130px', height: 52}}>현장 사고출동자</Button>
    <Button {...args} disabled style={{width: '110px', height: 44}}>인증</Button>
    <Button {...args} outline style={{width: '150px', height: 44}}>추천인 찾기</Button>
    <Button {...args} style={{width: '150px', height: 50, borderRadius: 5}}>로그인</Button>
    <Button {...args} outline style={{width: '150px', height: 42, borderRadius: 5}}>셀프 링크 공유</Button>
    <Button {...args} disabled style={{width: '150px', height: 46}}>요청하기</Button>
    <Button {...args} disabled style={{width: '150px', height: 36}}>리뷰작성확인</Button>
    <Button {...args} outline style={{width: '150px', height: 40}}>새 공업사 추가</Button>
  </div>
)


// export const Default = Template.bind({})
// export const Outline = Template.bind({})
// export const DefaultBorder = Template.bind({})
// export const OutlineBorder = Template.bind({})


Variants.args = {
  onClick: () => console.log('click'),
}
