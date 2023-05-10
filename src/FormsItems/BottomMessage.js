function BottomMessage( {description} ) {
    return (
        <div id={description.id}>{description.question}<a href={description.link}>{description.click}</a>{description.goal}</div>
    );
}

export default BottomMessage;