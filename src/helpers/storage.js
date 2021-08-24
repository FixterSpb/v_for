export const add = data => {
    const dataStore = get()
    data.id = getId(dataStore)
    data.title += data.id
    dataStore.unshift(data)
    localStorage.setItem('data', JSON.stringify(dataStore))
    return [...dataStore]
}

export const get = () => {
    const dataJson = localStorage.getItem('data')
    if (!dataJson) {
        return []
    }
    console.log(JSON.parse(dataJson));
    return JSON.parse(dataJson)
}

export const del = (id) => {
    const dataJson = localStorage.getItem('data')
    console.log(dataJson, id)
    if (!dataJson) return

    const data = JSON.parse(dataJson)
    data.splice(data.indexOf(data.find(el => el.id === id)), 1)
    localStorage.setItem('data', JSON.stringify(data))
    return [...data]
}

const getId = (data) => {
    if (data.length === 0) return 1
    const tempData = [...data]
    const id = tempData.sort((a, b) => b.id - a.id)[0].id + 1
    console.log(id);
    return id
    // return tempData.sort((a, b) => a.id - b.id).shift
}

export const update = () => {
    const data = get()
    data.map(el => {
        if (el.status < 4) {
            el.status++
        }
        return el
    })
    localStorage.setItem('data', JSON.stringify(data))
    return data
}