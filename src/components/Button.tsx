
type ButtonProps = {
    text: string,
    styles?: string
}

const Button = ({ text, styles }: ButtonProps) => {
    return (
        <button type="button" className={`py-4 px-6 font-poppins bg-lightAccent font-medium text-[18px]  rounded-[10px]  outline-none ${styles}`}>
            {text}
        </button>
    )
}

export default Button