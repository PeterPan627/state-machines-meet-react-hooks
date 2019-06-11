import { Button as AntButton, List, Modal as AntModal } from 'antd'
import React from 'react'

export const Button = props => <AntButton size="large" {...props} />

const PrimaryButton = props => <AntButton type="primary" {...props} />

const ListView = ({ onView }) => (
  <List>
    <List.Item>
      <AntButton onClick={onView}>Item 1</AntButton>
    </List.Item>
    <List.Item>
      <AntButton onClick={onView}>Item 2</AntButton>
    </List.Item>
    <List.Item>
      <AntButton onClick={onView}>Item 3</AntButton>
    </List.Item>
  </List>
)

const DetailView = ({ onBack, onEdit }) => (
  <>
    <AntButton onClick={onBack}>Back</AntButton>&nbsp;
    <PrimaryButton onClick={onEdit}>Edit</PrimaryButton>
  </>
)

const DetailEdit = ({ onSubmit }) => (
  <PrimaryButton onClick={onSubmit}>Submit</PrimaryButton>
)

export const Modal = ({
  onBack,
  onEdit,
  onView,
  onSubmit,
  stateValue,
  ...props
}) => (
  <AntModal
    centered
    footer={null}
    title={stateValue}
    visible={!!stateValue}
    {...props}
  >
    {stateValue === 'list' ? (
      <ListView onView={onView} />
    ) : stateValue === 'view' ? (
      <DetailView onBack={onBack} onEdit={onEdit} />
    ) : stateValue === 'edit' ? (
      <DetailEdit onSubmit={onSubmit} />
    ) : stateValue === 'create' ? (
      <DetailEdit onSubmit={onSubmit} />
    ) : null}
  </AntModal>
)
