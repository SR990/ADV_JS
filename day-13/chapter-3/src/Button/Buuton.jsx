import styles from './button.module.css'
function Button(){
   

        const styles ={
                backgroundColor: "rgb(84, 84, 167)",
                color: "aliceblue",
                border: "none",
                borderRadius: "10px",
                padding: "10px",
                margin:"10px",
                cursor: "pointer",
            
        }
        return(
            <button style={styles}>Click Me</button> //inline  in the same file only writing the code


        // <button className={styles.button}>Click Me</button> //module creating a folder adding jsx and css file in tnat
        // <button className="button">Click Me</button> //external means index.css


    )
}

export default Button