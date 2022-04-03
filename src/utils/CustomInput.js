import React from 'react'

const CustomInput = ({ type, disabled, name, value, onChange, icon, customStyle, color, placeholder, label }) => {
    return (
        <>
            <section>
                {label && <p className={'f16 boldText black pb10'}>{label}</p>}
                <div className='inputContainer'>
                    <input type={type} disabled={disabled} name={name} value={value}
                        onChange={onChange} className='inputBox' style={customStyle}
                        placeholder={placeholder}
                    />
                    {icon && <span style={{ color: color }}>{icon}</span>}
                </div>
            </section>

        </>
    )
}

export default CustomInput