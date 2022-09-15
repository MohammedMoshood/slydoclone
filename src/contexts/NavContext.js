import React , {useState , useContext} from "react"

const NavContext = React.createContext() ;

export const NavProvider = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const [isHovering, setIsHovering] = useState(false);

  const toggleHoverTrue = () => {
    setIsHovering(true);
  };
  const toggleHoverFalse = () => {
    setIsHovering(false);
  };

  return <NavContext.Provider 
  value={{
    isOpen , toggle ,isHovering ,toggleHoverTrue , toggleHoverFalse
  }}
  >{children}</NavContext.Provider>
}

export const useNavContext = () => {
    return useContext(NavContext)
}