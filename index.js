
let DivEl=(props)=>(<div id={props.id} class={props.class}>
    <img src={props.src}/>
    <p>{props.content}</p>
</div>)
let Head=()=><h1 class="hed">Notifications</h1>

ReactDOM.render(<>
<Head />
<DivEl src="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png" content="Infoemation Message" class="common" id="blue"/>
<DivEl src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png" content="Success Message" class="common" id="green"/>
<DivEl src="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png" content="Warning Message" class="common" id="yell"/>
<DivEl src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png" content="Error Message" class="common" id="red"/>
</>,document.getElementById("root"))




