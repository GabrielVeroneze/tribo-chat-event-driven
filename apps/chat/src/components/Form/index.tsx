import logo2 from '@/assets/logo2.png'
import './styles.scss'

interface FormProps {
    children: React.ReactNode
    title: string
    buttonLabel: string
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

const Form = ({ onSubmit, title, children, buttonLabel }: FormProps) => {
    return (
        <div className="form-container">
            <div className="form-image">
                <img src={logo2} alt="logo" />
            </div>
            <h1 className="form-title">{title}</h1>
            <hr className="form-title-linha" />
            <form onSubmit={onSubmit} className="form-items">
                {children}
                <input
                    value={buttonLabel}
                    type="submit"
                    className="form-button"
                />
            </form>
        </div>
    )
}

export default Form
