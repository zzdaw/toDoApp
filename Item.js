const Item = (props) => {
    return (
        <>
            <li>{props.item} </li><button onClick={() => props.remove(props.item)} className='remove'>Remove</button>
        </>
    )
}