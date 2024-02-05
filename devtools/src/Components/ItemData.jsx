import "./item.css"
const ItemData=({avatar_url, login})=>{
    return (
        <div className="item">
             <img src={avatar_url} alt="avatar" />
             <h2>{login}</h2>
        </div>
    )
}
export default ItemData