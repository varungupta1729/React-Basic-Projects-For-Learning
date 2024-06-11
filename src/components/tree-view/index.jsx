import MenuList from "./menu-list"
import "./style.css"


export default function Treeview({menus=[]}){
    return (   <div className="tree-view-container">
    <MenuList list={menus} />
  </div>);
   

}