function Button( {description}) {
    return (
        <button id={description.id} type="submit" className="btn btn-primary">{description.name}</button>
    );
}

export default Button;