import React, { FC, SetStateAction, useState } from 'react';
import { Modal, Text } from 'react-native'
import { Container, ModalContainer, TextModal } from './ ModalSystem.styles';
import { Icon } from 'react-native-elements'

export interface ModalProps {
  visibleModal: boolean
  text: string
}

export const ModalSystem: React.FC<ModalProps> = ({
  visibleModal,
  text
}) => {

  return (
    <>
      <Container>
        <Modal
          animationType="slide"
          transparent={false}
          visible={visibleModal}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <Container>
            <ModalContainer>
              <Icon name='check'
                type='font-awesome'
                color='#770FDF'
                size={30}
              />
              <TextModal>{text}</TextModal>
            </ModalContainer>
          </Container>
        </Modal>

      </Container>
    </>
  )
}


