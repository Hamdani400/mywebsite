import { useState } from "react"


export const useAccordion = (index: number, type: string) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const onClickButton = () => {
        setIsOpen((prevState) => !prevState)

        const content: HTMLElement | null = document.querySelector(`.accordion-content-${index}-${type}`);
        const contentHeight: number | undefined = content?.scrollHeight

        if (content) {
            if (isOpen) {
                content.style.maxHeight = '0px'
            } else {
                content.style.maxHeight = contentHeight + 'px'
            }
        }
    }

    return { onClickButton, isOpen }
}