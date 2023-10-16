"use client"

const { createContext, useState, useEffect } = require("react");

export const ThemeContext = createContext()


const getTheme = () =>{
   if(typeof window !== "undefined"){
    const val = localStorage.getItem("theme")
    return val || ""
   }
}


export const ThemeContextProvider = ({children}) =>{

    const [theme,setTheme] = useState(()=>{
        return getTheme();
    })

    const toggle = () =>{
        setTheme(theme === "light" ? "dark" : "light")
    }

    useEffect(() => {
      localStorage.setItem("theme", theme)
    }, [theme])
    
    return (
    <ThemeContext.Provider value={{theme,toggle}}>
        {children}
    </ThemeContext.Provider>
    )
}