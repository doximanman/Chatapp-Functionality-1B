function Input({ description }) {
    return (
<<<<<<< HEAD
        <div class="col-11 row ">
            <label class={description.labelClass}>{description.name}</label>
            <div class={description.divClass}>
                <input type={description.type} class="form-control" id={description.id} required></input>
=======
        <div className="col-11 row ">
            <label className={description.labelClass}>{description.ins}</label>
            <div className={description.divClass}>
                <input value={description.value} onChange={description.onChange} type={description.type} className={description.className} id={description.id} name={description.name} required></input>
>>>>>>> register-dev
            </div>
        </div>
    );
}

export default Input;