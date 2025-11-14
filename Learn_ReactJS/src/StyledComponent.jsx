import styled from "styled-components"
function StyleComp(){
    // const Heading = styled.h2`
    //     color:red;
    //     border : 2px solid green;
    //     margin : 20px;
    //     padding : 10px;
    //     border-radius : 10px
    // `

    const Heading=styled.h1({
        color : "red",
        border : "2px solid green",
        margin: "20px",
        padding : "10px",
        borderRadius : "10px"
    })

    const Sbtn = styled.button`
        color : red;
        width : 100px;
        height : 30px;
        border-radius : 10px
    `
    return(
        <div>
            <h1>Styled Component</h1>
            <Heading>Hello</Heading>
            <Heading>Hello</Heading>
            <Heading>Hello</Heading>
            <Heading>Hello</Heading>
            <Heading>Hello</Heading>
            <Sbtn>Click Me</Sbtn>
        </div>
    )
}
export default StyleComp;