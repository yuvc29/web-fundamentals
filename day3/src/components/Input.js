function Input(props){ 
    return(
        <div>
            <input type="text" value={text} onChange={handleChange} />
            {(() => {
                switch (props.type) {
                case 'text':
                    return <input type="text" value={props.text} onChange={props.handleChange} />
                case 'playing':
                    return <Playing handleClick={handleClick} />
                case 'won':
                    return <Won handleClick={handleClick} />
                case 'lost':
                    return <Lost handleClick={handleClick} />
                default:
                    return null
                }
            })()}
        </div>
    )
}

export default Input
