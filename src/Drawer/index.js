import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from "@chakra-ui/react"

export default function(){
    const [isOpen, setOpen] = React.useState(false)
    const onClose = () => setOpen(false)

    return (
        <React.Fragment>
            <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
            >
                
            </Drawer>
        </React.Fragment>
    )
}