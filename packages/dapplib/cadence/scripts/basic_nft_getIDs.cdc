
pub fun main(addr: Address) : [UInt64]? {
    let account = getAccount(addr)
    let capability = account.getCapability(/public/NFTReceiver)
    let ref = capability.borrow<&DappState.Collection>()

    return ref?.getIDs()
}