import './styles.scss'

type InputBaseProps = Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'onChange'
>

interface InputProps extends InputBaseProps {
    label: string
    onChange?: (value: string) => void
}

const Input = ({ label, onChange, ...props }: InputProps) => {
    return (
        <div className="input-container">
            <label className="input-label" htmlFor={props.id}>
                {label}
            </label>
            <input
                className="input-element"
                onChange={(event) => onChange?.(event.target.value)}
                {...props}
            />
        </div>
    )
}

export default Input
