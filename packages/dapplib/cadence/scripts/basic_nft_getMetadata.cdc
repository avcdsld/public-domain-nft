
pub fun main(addr: Address, ids: [UInt64]) : [{String: String}?] {
    let account = getAccount(addr)
    let capability = account.getCapability(/public/NFTReceiver)
    let collectionRef = capability.borrow<&AnyResource{DappState.NFTReceiver}>()
    var res: [{String: String}?] = []
    var i = 0
    while i < ids.length {
        let nftRef = collectionRef?.borrowNFT(id: ids[i])
        res.append(nftRef?.metadata)
        i = i + 1
    }
    return res
}