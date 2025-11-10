import {useState} from "react"
function Inline() {
    const [textColor,setTextColor]=useState('red')
    const[cardStyle,setCardStyle]=useState(
       {
            border: '2px solid black',
            padding: '20px',
            width: '150px',
            borderRadius: '20px',
            textAlign: 'center',
            boxShadow: '2px 2px 2px 2px #e5d0d0ff',
        }
    )
    
    const imgStyle = {
        height: "180px",
        width: '200px',
        marginLeft: '-30px'
    }
    const [grid, setGrid]=useState(true)
    
    const updateTheme=(bgColor,textColor)=>{
        setCardStyle({...cardStyle,backgroundColor:bgColor})
        setTextColor(textColor)
    }
   
    return (
        <div>
            <h1 style={{ color: 'red' }}>Dynamic & Conditional Style in ReactJS</h1>
            <button onClick={()=>updateTheme('grey','green')}>Grey Theme</button>
            <button onClick={()=>updateTheme('white','black')}>Default Theme</button>
            <button onClick={()=>setGrid(!grid)}>Toggle Grid</button>
            <div style={{display:grid?'flex':'block',flexWrap:'wrap'}}>
                <div style={cardStyle}>
                    <img style={imgStyle} src="https://documents.iplt20.com/ipl/IPLHeadshot2025/2.png" alt="" />
                    <div style={{color:textColor}}>
                        <h4>Virat Kholi</h4>
                        <p>Indian Cricketer</p>
                    </div>
                </div>
                 <div style={cardStyle}>
                    <img style={imgStyle} src="https://documents.iplt20.com/ipl/IPLHeadshot2025/2.png" alt="" />
                    <div style={{color:textColor}}>
                        <h4>Virat Kholi</h4>
                        <p>Indian Cricketer</p>
                    </div>
                </div>
                 <div style={cardStyle}>
                    <img style={imgStyle} src="https://documents.iplt20.com/ipl/IPLHeadshot2025/2.png" alt="" />
                    <div style={{color:textColor}}>
                        <h4>Virat Kholi</h4>
                        <p>Indian Cricketer</p>
                    </div>
                </div>
                 <div style={cardStyle}>
                    <img style={imgStyle} src="https://documents.iplt20.com/ipl/IPLHeadshot2025/2.png" alt="" />
                    <div style={{color:textColor}}>
                        <h4>Virat Kholi</h4>
                        <p>Indian Cricketer</p>
                    </div>
                </div>
                 <div style={cardStyle}>
                    <img style={imgStyle} src="https://documents.iplt20.com/ipl/IPLHeadshot2025/2.png" alt="" />
                    <div style={{color:textColor}}>
                        <h4>Virat Kholi</h4>
                        <p>Indian Cricketer</p>
                    </div>
                </div>
                 <div style={cardStyle}>
                    <img style={imgStyle} src="https://documents.iplt20.com/ipl/IPLHeadshot2025/2.png" alt="" />
                    <div style={{color:textColor}}>
                        <h4>Virat Kholi</h4>
                        <p>Indian Cricketer</p>
                    </div>
                </div>
                 <div style={cardStyle}>
                    <img style={imgStyle} src="https://documents.iplt20.com/ipl/IPLHeadshot2025/2.png" alt="" />
                    <div style={{color:textColor}}>
                        <h4>Virat Kholi</h4>
                        <p>Indian Cricketer</p>
                    </div>
                </div>
                 <div style={cardStyle}>
                    <img style={imgStyle} src="https://documents.iplt20.com/ipl/IPLHeadshot2025/2.png" alt="" />
                    <div style={{color:textColor}}>
                        <h4>Virat Kholi</h4>
                        <p>Indian Cricketer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Inline;