function Button( {description}) {
    return (
<<<<<<< HEAD
        <button id={description.id} type="submit" className="btn btn-primary" onClick={description.onClick}>{description.name}</button>
=======
        <button id={description.id} type="submit" class="btn btn-primary">{description.name}</button>
>>>>>>> master
    );
}

export default Button;