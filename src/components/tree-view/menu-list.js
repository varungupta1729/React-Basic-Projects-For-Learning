import MenuItem from "./menu-item";

export default  function MenuList({list=[]}){
   
   return ( <div>
   {
list && list.length > 0 ? ( 
    list.map( (item) => ( 
        <ul className="menu-list-container"><li><MenuItem item = {item}/></li></ul>
        ) )
) : (
    null
)
   }
       
    </div> );
}