import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './index'

export default {
  title: "Example/IMSForm/Button",
  component: Button,
  parameters: {
    componentSubtitle: "페이지에 존재하는 각종 다양한 버튼을 표시합니다."
  },
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
    <Button style={{flex: 1}} disabled {...args}>Default</Button>
  </>
)

export const Size = (args) => (
  <>
    <Button {...args} style={{width: '280px', height: 50, fontSize: 18}}>로그인</Button>
    <Button {...args} style={{
      width: '300px', height: 60, fontSize: 18, background: '#ffa723',
      border: 'none',
    }}>지금 시작하기</Button>
    <Button {...args} style={{width: '152px', height: 42, fontSize: 14, background: '#000000'}}>정책 확인 및 동의하기</Button>
    <Button {...args} style={{width: 45, height: 28, fontSize: 12, background: '#575757'}}>조회</Button>
    <Button {...args} outline style={{
      width: 60, height: 28, fontSize: 12,
      color: '#575757',
      border: '1px solid #575757'
    }}>초기화</Button>
    <Button {...args} cancel style={{
      width: 130, height: 44,
    }}>직원 삭제</Button>
    <Button {...args} disabled style={{
      width: 130, height: 42,
    }}>진위 여부 조회</Button>
  </>
)


// export const Default = Template.bind({})
// export const Outline = Template.bind({})
// export const DefaultBorder = Template.bind({})
// export const OutlineBorder = Template.bind({})


Variants.args = {
  onClick: () => console.log('click'),
}
