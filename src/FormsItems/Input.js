function Input({ description }) {
    return (
        <div class="col-11 row ">
            <label class={description.labelClass}>{description.name}</label>
            <div class={description.divClass}>
                <input type={description.type} class="form-control" id={description.id} required></input>
            </div>
        </div>
    );
}

export default Input;