let index = 0
const orderList = document.createElement('ol')

getXML.addEventListener('click', () => {
    const request = new XMLHttpRequest()
    request.open('get', '/xml.xml')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.responseXML)
            let xmlP = request.responseXML.getElementsByTagName('p')[0].textContent
            let p =document.createElement('p')
            p.textContent = xmlP
            document.body.appendChild(p)
        }
    }
    request.send()
})

let getAjax = () => {
    const request = new XMLHttpRequest()
    request.open('get', `/data${index}.json`)
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            let string = JSON.parse(request.response)
            string.map((value, index) => {
                const listItem = document.createElement('li')
                listItem.innerHTML = `name:${value.name} age:${value.age}`
                orderList.appendChild(listItem)
            })
            document.body.appendChild(orderList)
            index += 1
            if (index > 1) {
                getJson.setAttribute('disabled', 'disabled')
                getJson.textContent = '不能再请求了，我一滴都没了'
            }
        }
    }
    request.send()
}
getJson.addEventListener('click', getAjax)

getStyle.addEventListener('click', () => {
    const request = new XMLHttpRequest()
    request.open('get', '/style.css')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const style = document.createElement('style')
            style.innerHTML = request.response
            document.head.appendChild(style)
        }
    }
    request.send()
})

getJs.addEventListener('click', () => {
    const request = new XMLHttpRequest()
    request.open('get', '/jsChange.js')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const js = document.createElement('script')
            js.innerHTML = request.response
            document.body.appendChild(js)
            console.log('sadad')
        }
    }
    request.send()
})