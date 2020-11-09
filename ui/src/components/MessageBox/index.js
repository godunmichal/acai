import React from 'react'
import { MessageBoxContainer } from './MessageBoxElements'

function MessageBox(props) {
    return (
        <MessageBoxContainer>
        {props.children}
      </MessageBoxContainer>
    )
}

export default MessageBox
