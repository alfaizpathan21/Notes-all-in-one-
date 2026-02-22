//  function customRender(reactElement,mainContainer){
//     const domElement=document.createElement(reactElement.type)
//     domElement.innerHTML=reactElement.Children
//     domElement.setAttribute('href',reactElement.props.href)
//     domElement.setAttribute('target',reactElement.props.props)
    
//     mainContainer.appendChild(domElement)
    
    
//  }


const reactElement={

    type:"a",
    props:{
        href:'http://google.com',
        target :'_blank'
    },
    Children:'click me to visit gooogle '
}

const mainContainer=document.querySelector('#root')

 