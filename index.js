let driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign({}, driver, {[key]: value})
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign(driver, { [key]: value })
}

function deleteFromDriverByKey(driver, key) {
    let chauffeur = Object.assign({}, driver)
    delete chauffeur[key] 
    return chauffeur 
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key]
    return driver 
}