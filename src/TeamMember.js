export default function TeamMember(props)
{
    return(
        <div className="teammember">
            <img src={props.timg}></img>
            <h3>{props.tname}</h3>
            <h3>{props.tdesignation}</h3>
        </div>
    )
}