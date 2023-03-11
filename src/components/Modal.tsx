interface ModalProps {
children: React.ReactNode
title: string
onClose: () => void
}

export const Modal = ({children, title, onClose}: ModalProps) => {
    return (
        <>
        <div onClick={onClose} className=" fixed bg-black/50 top-0 right-0 left-0 bottom-0">
        </div>  
        <div className="w-[500px]  p-5 rounded bg-white absolute top-10 left-1/2 -translate-x-1/2">
        <p className="text-center text-lg mb-2">{title}</p>
        {children}</div>  
        </>  
    )
}