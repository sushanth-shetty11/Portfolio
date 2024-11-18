tailwind.config = {
    theme: {
        extend:{
            gridTemplateColumns: {
                'auto': 'repeat(auto-fit, minmax(200px, 1fr))'  
            },
            fontFamily: {
                outfit: ["Outfit", "sans-serif"],  
                ovo: ["Ovo", "serif"]              
            },
            colors:{
                lightHover: '#fcf4ff',
                darkHover: '#2a004a',
                darkTheme: '#11001F'
            },
            boxShadow:{
                'black':'4px 4px 0 #000',
                'white':'4px 4px 0 #fff',
            }
        }

        },
        darkMode: 'class'
        
}
